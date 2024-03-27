import { getCompaniesWithKeyIndicator } from "@/services/stocks";
import { Company, columns } from "./columns";
import { DataTable } from "./dataTable";
import { ICompanyWithKeyIndicator } from "@/types/company";
import { IApiResponse } from "@/types/customTypes";
import { companyList } from "./data";

import { SearchInput } from "@/components/SearchInput";
import { TablePagination } from "./TablePagination";
import { useState } from "react";

const transformToCompany = (
  companyWithIndicator: ICompanyWithKeyIndicator
): Company => ({
  ...companyWithIndicator,
  ...companyWithIndicator.keyIndicator,
});

// async function getData(): Promise<Company[]> {
//   // Fetch data from your API here.
//   // const res: any = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`);
//   // const data: IApiResponse<ICompanyWithKeyIndicator> = await res.json();
//   const companies: Company[] = companyList.data.content.map(transformToCompany);

//   return companies;
// }

export const CompanyList = () => {
  // const data = await getData();
  const data: Company[] = companyList.data.content.map(transformToCompany);
  const [page, setPage] = useState(1);
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
        <DataTable columns={columns} data={data} />
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
