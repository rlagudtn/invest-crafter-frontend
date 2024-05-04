"use client";
import { ICompanyWithKeyIndicator } from "@/types/company";
import {
  IApiResponse,
  IFilterItem,
  IJSendResponse,
  ISortItem,
} from "@/types/customTypes";
import { Company, tableColumns } from "./columns";
import { DataTable } from "./dataTable";

import { SearchInput } from "@/components/SearchInput";
import { transformToCompany } from "@/lib/utils";
import { useEffect, useState } from "react";
import { filterItems } from "./framework";
import { TableFilter } from "./tableFilter";
import { TablePagination } from "./tablePagination";

export const CompanyList = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [sort, setSort] = useState<ISortItem | undefined>();
  const [filters, SetFilters] = useState<IFilterItem[]>([]);
  const [filterColList, setFilterColList] = useState<IFilterItem[]>([]);
  const [companyOverviews, setCompanyOverviews] = useState<Company[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  async function getCompanyIndicators(url: string) {
    const res: any = await fetch(url);
    const data: IApiResponse<ICompanyWithKeyIndicator> = await res.json();
    setCompanies(data.data.content.map(transformToCompany));
    setTotalPages(data.data.totalPages);
  }
  // page, sort, filter 변경 시 fetch 실행
  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/companies?page=${page}&size=${size}`;
    if (keyword === "") {
      //정렬 및 필터 query 추가
      sort !== undefined ? (url += `&sort=${sort.value},${sort.dir}`) : "";
      filters.map((item) => {
        if (item.min) url += `&${item.minLabel}=${item.min}`;
        if (item.max) url += `&${item.maxLabel}=${item.max}`;
      });
    } else {
      url += `&keyword=${keyword}`;
    }
    getCompanyIndicators(url);
  }, [page, sort, filters]);

  useEffect(() => {
    getCompanyIndicators(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/companies?page=${page}&size=${size}`
    );
    // 초기 필터 가능한 열 목록 설정
    setFilterColList(
      filterItems.map((item) => ({
        ...item,
        used: false,
      }))
    );

    //모든 기업 정보 fetch(기업명, 심볼 등 간단한 정보만)
    async function getOverviews() {
      const res: any = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/companies/overviews`
      );
      const data: IJSendResponse<Company[]> = await res.json();

      setCompanyOverviews(data.data);
    }
    // getOverviews();
  }, []);

  return (
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col items-center space-y-5 sm:space-y-8 md:space-y-20 lg:space-y-20">
      <div className="w-full flex flex-col items-center space-y-4 md:space-y-8">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
          <a href="/">Invest Crafter</a>
        </div>
        <SearchInput
          className=" rounded-lg"
          btnWidth="w-12 sm:w-14 md:w-16"
          height=" h-12 sm:h-14 md:h-16"
          keyword={keyword}
          setKeyword={setKeyword}
          setCompanies={setCompanies}
          setTotalPages={setTotalPages}
          setPage={setPage}
        />
      </div>

      <div className="w-full flex flex-col items-center space-y-4 md:space-y-4">
        <div className="flex flex-col items-start w-full space-y-4 ">
          <div className="text-black text-xl md:text-2xl lg:text-3xl font-bold font-['Pretendard'] w-full text-left">
            미국 기업 리스트
          </div>
          {keyword === "" ? (
            <TableFilter
              sort={sort}
              setSort={setSort}
              filters={filters}
              setFilters={SetFilters}
              filterColList={filterColList}
              setFilterColList={setFilterColList}
            />
          ) : null}
        </div>

        <DataTable columns={tableColumns} data={companies} />
        <TablePagination
          page={page}
          totalPages={totalPages}
          size={30}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
