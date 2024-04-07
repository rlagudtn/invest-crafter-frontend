import { Combobox } from "@/components/Combobox";
import { SortCombobox } from "@/components/SortCombobox";
import { columns } from "./framework";
import { FilterCombobox } from "@/components/FilterCombobox";
import { IFilterItem } from "@/types/customTypes";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { dir } from "console";

interface TableFilterProps {
  filter?: string;
  sortKey?: string;
  direction?: string;
  columnsMap: Map<string, string>;
  filters: IFilterItem[];
  filterColList: IFilterItem[];
  setSortKey: React.Dispatch<React.SetStateAction<string | null>>;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  setFilters: React.Dispatch<React.SetStateAction<IFilterItem[]>>;
  setFilterColList: React.Dispatch<React.SetStateAction<IFilterItem[]>>;
}

export const TableFilter = ({
  filter,
  sortKey,
  direction,
  columnsMap,
  setSortKey,
  setDirection,
  filters,
  setFilters,
  filterColList,
  setFilterColList,
}: TableFilterProps) => {
  return (
    <div className="w-full flex-col justify-end items-start gap-5 inline-flex">
      <div className="text-black text-xl md:text-2xl lg:text-3xl font-bold font-['Pretendard']">
        미국 기업 리스트
      </div>
      <div className="w-full justify-start space-x-2 items-start  inline-flex">
        <SortCombobox
          columnsMap={columnsMap}
          direction={direction}
          setSortKey={setSortKey}
          setDirection={setDirection}
          frameworks={columns}
          defaultPlaceholder="정렬"
        />
        <ScrollArea className="whitespace-nowrap">
          <div className="flex space-x-2">
            {filters.map((item) => (
              <FilterCombobox
                type="UPDATE"
                filters={filters}
                filterItem={item}
                filterColList={filterColList}
                setFilterColList={setFilterColList}
                setFilters={setFilters}
              />
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <FilterCombobox
          type="ADD"
          filters={filters}
          filterColList={filterColList}
          setFilterColList={setFilterColList}
          setFilters={setFilters}
        />
        {/* <FilterCombobox
            columnsMap={columnsMap}
            defaultPlaceholder="Add Filter"
          /> */}
      </div>
      <div className=" justify-start items-start gap-2.5 inline-flex"></div>
    </div>
  );
};
