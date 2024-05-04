import { FilterCombobox } from "@/components/FilterCombobox";
import { SortCombobox } from "@/components/SortCombobox";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { IFilterItem, ISortItem } from "@/types/customTypes";

interface TableFilterProps {
  sort?: ISortItem;
  filters: IFilterItem[];
  filterColList: IFilterItem[];
  setSort: React.Dispatch<React.SetStateAction<ISortItem | undefined>>;
  setFilters: React.Dispatch<React.SetStateAction<IFilterItem[]>>;
  setFilterColList: React.Dispatch<React.SetStateAction<IFilterItem[]>>;
}

export const TableFilter = ({
  sort,
  setSort,
  filters,
  setFilters,
  filterColList,
  setFilterColList,
}: TableFilterProps) => {
  return (
    <div className="w-full flex-col justify-end items-start gap-5 inline-flex">
      <div className="w-full justify-start space-x-2 items-start  inline-flex">
        <SortCombobox sort={sort} setSort={setSort} defaultPlaceholder="정렬" />
        <ScrollArea className="whitespace-nowrap">
          <div className="flex space-x-2">
            {filters.map((item, key) => (
              <FilterCombobox
                key={key}
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
