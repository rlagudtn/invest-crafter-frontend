import * as React from "react";
import {
  ArrowDownUp,
  ArrowDown,
  ArrowUp,
  PlusIcon,
  TrashIcon,
  UndoIcon,
} from "lucide-react";

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

import { useState } from "react";
import { IFrameItem, ISortItem } from "@/types/customTypes";
import { sortItems } from "@/containers/companies/framework";

interface ISortComboProps {
  sort?: ISortItem;
  setSort: React.Dispatch<React.SetStateAction<ISortItem | undefined>>;
  defaultPlaceholder?: string;
}
export function SortCombobox({
  sort,
  setSort,
  defaultPlaceholder = "옵션을 선택해주세요",
}: ISortComboProps) {
  const [selected, setSelected] = useState<ISortItem | undefined>(sort);
  const [open, setOpen] = useState<boolean>(false);
  const [targetKey, setTargetKey] = useState(+new Date());
  const [dirKey, setPopoverDirKey] = useState(+new Date() + 1);
  let counter = 0;

  const renderIcon = () => {
    if (sort !== undefined && sort.dir === "asc") {
      return <ArrowUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
    } else if (sort !== undefined && sort.dir === "desc") {
      return <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
    }
    return <ArrowDownUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
  };
  const handleSortBtnClick = () => {
    if (selected !== undefined) {
      const dir = selected.dir === undefined ? "asc" : selected.dir;
      setSort({ ...selected, dir });
    }
  };
  const handleRemoveSortBtnClick = () => {
    setSort(undefined);
    setSelected(undefined);

    // 현재 시간 기반의 키에 카운터 값을 추가하여 중복 방지
    const uniqueTimestamp = +new Date() + counter;
    setTargetKey(uniqueTimestamp);
    setPopoverDirKey(uniqueTimestamp + 1); // 두 키 간에 중복을 방지하기 위해 +1
    counter += 2; // 다음 호출을 위해 카운터 증가
  };
  React.useEffect(() => {
    setSelected(sort);
  }, [open]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          {sort ? sort.label : "정렬하기"}
          {renderIcon()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-3 p-3" align="start">
        <div className="flex space-x-2">
          <Select
            key={targetKey}
            onValueChange={(value: string) => {
              const selectedSort = sortItems.find(
                (item) => item.value === value
              );
              if (selectedSort) {
                setSelected({ ...selectedSort, dir: selected?.dir });
              }
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue
                placeholder={
                  selected !== undefined ? selected.label : "컬럼 선택"
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sortItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            key={dirKey}
            onValueChange={(value: string) => {
              if (selected)
                setSelected({ ...selected, dir: value as "asc" | "desc" });
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue
                placeholder={selected?.dir === "desc" ? "내림차순" : "오름차순"}
              ></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">오름차순</SelectItem>
                <SelectItem value="desc">내림차순</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <Button
            onClick={handleSortBtnClick}
            className="w-full flex justify-start bg-transparent text-black hover:text-white hover:bg-cyan-600"
          >
            <PlusIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
            정렬하기
          </Button>
          <Button
            className="w-full py-0 justify-start bg-transparent text-black hover:text-white hover:bg-red-500"
            onClick={handleRemoveSortBtnClick}
          >
            <TrashIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
            정렬 제거
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
