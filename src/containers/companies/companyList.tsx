import { getCompaniesWithKeyIndicator } from "@/services/stocks";
import { Company, columns } from "./columns";
import { DataTable } from "./dataTable";
import { ICompanyWithKeyIndicator } from "@/types/company";
import { IApiResponse } from "@/types/customTypes";
import { companyList } from "./data";

import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { TablePagination } from "./tablePagination";

const transformToCompany = (
  companyWithIndicator: ICompanyWithKeyIndicator
): Company => ({
  ...companyWithIndicator,
  ...companyWithIndicator.keyIndicator,
});

export const CompanyList = () => {
  // const data = await getData();
  // const data: Company[] = companyList.data.content.map(transformToCompany);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function getData(page: number, size: number) {
      const res: any = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api?page=${page}&size=${size}`
      );
      const data: IApiResponse<ICompanyWithKeyIndicator> = await res.json();
      // const companies: Company[] = companyList.data.content.map(transformToCompany);
      setCompanies(data.data.content.map(transformToCompany));
    }
    getData(page, size);
  }, [page]);
  return (
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col items-center space-y-5 sm:space-y-8 md:space-y-10 lg:space-y-12">
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
        <DataTable columns={columns} data={companies} />
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
