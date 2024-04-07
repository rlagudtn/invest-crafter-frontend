"use client";

import * as React from "react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlusIcon, TrashIcon, FilterIcon, Filter } from "lucide-react";
import { IFilterItem, IFrameItem } from "@/types/customTypes";

interface IComboboxProps {
  type: "ADD" | "UPDATE";
  filterItem?: IFilterItem;
  defaultPlaceholder?: string;
  filters: IFilterItem[];
  filterColList: IFilterItem[];
  setFilters: React.Dispatch<React.SetStateAction<IFilterItem[]>>;
  setFilterColList: React.Dispatch<React.SetStateAction<IFilterItem[]>>;
}
export function FilterCombobox({
  type,
  filterItem,
  filters,
  filterColList,
  setFilters,
  setFilterColList,
}: IComboboxProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [target, setTarget] = useState<string | undefined>(filterItem?.label);
  const [selected, setSelected] = useState<IFilterItem | undefined>(filterItem);
  const [targetKey, setTargetKey] = useState(+new Date());
  const [min, setMin] = useState<number | undefined>(filterItem?.min);
  const [max, setMax] = useState<number | undefined>(filterItem?.max);

  // Render function for the dynamic icon, allowing for customization or default
  const renderIcon = () => {
    if (type === "ADD") return null;
    return <FilterIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
  };

  const handleFilterBtnClick = () => {
    if (selected && (min || max)) {
      setFilters([...filters, { ...selected, min: min, max: max, used: true }]);

      const colList = filterColList.map((item) => {
        if (item.value === selected?.value) {
          item.used = true;
        }
        return item;
      });
      setFilterColList(colList);
      setOpen(false);
    }
  };
  const handleRemoveFilterBtnClick = () => {
    const removed = filters.filter((item) => item.value !== filterItem?.value);
    setFilters(removed);

    const colList = filterColList.map((item) => {
      if (item.value === filterItem?.value) {
        item.used = false;
      }
      return item;
    });
    setFilterColList(colList);
    setOpen(false);
  };
  const handleUpdateFilterBtnClick = () => {
    if (type === "UPDATE" && selected) {
      const updatedFilters = filters.map((item) => {
        if (item.value === filterItem?.value) {
          return { ...selected, min: min, max: max };
        }
        return item;
      });

      setFilters(updatedFilters);
      setOpen(false);
    }
  };
  React.useEffect(() => {
    if (open === false) {
      setTarget(filterItem?.label);
      setMin(filterItem?.min);
      setMax(filterItem?.max);
    }
  }, [open]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={type === "ADD" ? "ghost" : "outline"}
          role="combobox"
          aria-expanded={open}
        >
          {type == "ADD" ? (
            <PlusIcon className="m-0 p-0 h-4 w-4 shrink-0 opacity-50" />
          ) : null}
          {type === "UPDATE" ? filterItem?.label : "필터 추가"}
          {renderIcon()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-4 py-3" align="start">
        <Select
          key={targetKey}
          disabled={type === "UPDATE" ? true : false}
          onValueChange={(value: string) => {
            const changed = filterColList.find((item) => item.value === value);
            if (changed) setSelected(changed);
          }}
        >
          <SelectTrigger className="w-full border-gray-400">
            <SelectValue placeholder={target ? target : "컬럼 선택"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filterColList?.map((item) => {
                if (item.used === false)
                  return (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex flex-col space-y-2 my-4 ml-3">
          <div className="flex space-x-5 items-center  ">
            <Label htmlFor="min" className="whitespace-nowrap">
              최솟값
            </Label>
            <Input
              id="min"
              className=" h-8  border-gray-400"
              defaultValue={min}
              onChange={(e) => {
                setMin(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex space-x-5 items-center  ">
            <Label htmlFor="max" className="whitespace-nowrap">
              최댓값
            </Label>
            <Input
              id="max"
              className=" h-8  border-gray-400"
              defaultValue={max}
              onChange={(e) => {
                setMax(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          {target ? (
            <Button
              className="w-full flex justify-start bg-transparent text-black hover:text-white hover:bg-cyan-600"
              onClick={handleUpdateFilterBtnClick}
            >
              <PlusIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
              필터 변경하기
            </Button>
          ) : (
            <Button
              className="w-full flex justify-start bg-transparent text-black hover:text-white hover:bg-cyan-600"
              onClick={handleFilterBtnClick}
            >
              <PlusIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
              필터 추가하기
            </Button>
          )}

          <Button
            className="w-full py-0 justify-start bg-transparent text-black hover:text-white hover:bg-red-500"
            onClick={handleRemoveFilterBtnClick}
          >
            <TrashIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
            필터 제거하기
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
