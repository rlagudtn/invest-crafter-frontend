import * as React from "react";
import {
  ArrowDownUp,
  ArrowDown,
  ArrowUp,
  PlusIcon,
  TrashIcon,
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
import { IFrameItem } from "@/types/customTypes";

interface ISortComboProps {
  frameworks: IFrameItem[] | undefined;
  sortKey?: string | undefined;
  direction?: string;
  columnsMap: Map<string, string>;
  setSortKey: React.Dispatch<React.SetStateAction<string | null>>;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  defaultPlaceholder?: string;
  // IconComponent?: IconType; // Optional: Custom icon component
}
export function SortCombobox({
  frameworks,
  columnsMap,
  setSortKey,
  setDirection,
  direction,
  defaultPlaceholder = "옵션을 선택해주세요",
}: ISortComboProps) {
  const [targetKey, setTargetKey] = useState(+new Date());
  const [dirKey, setDirKey] = useState(+new Date() + 1);
  const [open, setOpen] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("");
  const [dir, setDir] = useState<string>("asc");
  const [placeholder, setPlaceholder] = useState<string>(defaultPlaceholder);
  let counter = 0;
  const renderIcon = () => {
    if (direction !== "" && direction === "asc") {
      return <ArrowUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
    } else if (direction !== "" && direction === "desc") {
      return <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
    }
    return <ArrowDownUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
  };
  const handleFrameworkChange = (newValue: string) => {
    setTarget(newValue);
  };
  const handleDirectionChange = (newValue: string) => {
    setDir(newValue);
  };
  const handleSortClick = () => {
    if (target !== "" && target !== undefined) {
      setSortKey(target);
      setDirection(dir);
      const item = columnsMap.get(target) || "error";
      setPlaceholder(item);
    }
  };
  const handleRemoveSort = () => {
    setSortKey(null);
    setTarget("");
    setDir("asc");
    setDirection("asc");

    // 현재 시간 기반의 키에 카운터 값을 추가하여 중복 방지
    const uniqueTimestamp = +new Date() + counter;
    setTargetKey(uniqueTimestamp);
    setDirKey(uniqueTimestamp + 1); // 두 키 간에 중복을 방지하기 위해 +1
    counter += 2; // 다음 호출을 위해 카운터 증가
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          {placeholder}
          {renderIcon()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-3 p-3" align="start">
        <div className="flex space-x-2">
          <Select key={targetKey} onValueChange={setTarget}>
            <SelectTrigger className="w-[280px]">
              <SelectValue
                placeholder={
                  target !== ""
                    ? frameworks?.find(
                        (framework) => framework.value === target
                      )?.label
                    : "컬럼 선택"
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {frameworks?.map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select key={dirKey} onValueChange={handleDirectionChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue
                placeholder={dir === "asc" ? "오름차순" : "내림차순"}
              />
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
            onClick={handleSortClick}
            className="w-full flex justify-start bg-transparent text-black hover:text-white hover:bg-cyan-600"
          >
            <PlusIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
            정렬하기
          </Button>
          <Button
            className="w-full py-0 justify-start bg-transparent text-black hover:text-white hover:bg-red-500"
            onClick={handleRemoveSort}
          >
            <TrashIcon className="h-5 w-5 shrink-0 opacity-50 mr-1" />
            정렬 제거
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
