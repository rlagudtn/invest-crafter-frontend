"use client";
import { ICompanyWithKeyIndicator } from "@/types/company";
import { IApiResponse, IFilterItem, ISortItem } from "@/types/customTypes";
import { Company, tableColumns } from "./columns";
import { DataTable } from "./dataTable";

import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { filterItems } from "./framework";
import { TableFilter } from "./tableFilter";
import { TablePagination } from "./tablePagination";

const transformToCompany = (
  companyWithIndicator: ICompanyWithKeyIndicator
): Company => {
  const { id, ...restKeyIndicator } = companyWithIndicator.keyIndicator;
  return {
    ...companyWithIndicator,
    ...restKeyIndicator,
  };
};

export const CompanyList = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [sort, setSort] = useState<ISortItem | undefined>();
  const [filters, SetFilters] = useState<IFilterItem[]>([]);
  const [filterColList, setFilterColList] = useState<IFilterItem[]>([]);

  // page, sort, filter 변경 시 fetch 실행
  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/companies?page=${page}&size=${size}`;

    //정렬 및 필터 query 추가
    sort !== undefined ? (url += `&sort=${sort.value},${sort.dir}`) : "";
    filters.map((item) => {
      if (item.min) url += `&${item.minLabel}=${item.min}`;
      if (item.max) url += `&${item.maxLabel}=${item.max}`;
    });

    async function getData() {
      const res: any = await fetch(url);
      const data: IApiResponse<ICompanyWithKeyIndicator> = await res.json();
      setCompanies(data.data.content.map(transformToCompany));
    }
    getData();
  }, [page, sort, filters]);

  // 초기 필터 가능한 열 목록 설정
  useEffect(() => {
    setFilterColList(
      filterItems.map((item) => ({
        ...item,
        used: false,
      }))
    );
  }, []);

  return (
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col items-center space-y-5 sm:space-y-8 md:space-y-20 lg:space-y-20">
      <div className="w-full flex flex-col items-center space-y-4 md:space-y-8">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Invest Crafter
        </div>
        <SearchInput
          className=" rounded-lg"
          btnWidth="w-12 sm:w-14 md:w-16"
          height=" h-12 sm:h-14 md:h-16"
        />
      </div>

      <div className="w-full flex flex-col items-center space-y-4 md:space-y-8">
        <TableFilter
          sort={sort}
          setSort={setSort}
          filters={filters}
          setFilters={SetFilters}
          filterColList={filterColList}
          setFilterColList={setFilterColList}
        />
        <DataTable columns={tableColumns} data={companies} />
        <TablePagination
          page={page}
          totalPages={21}
          size={30}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
