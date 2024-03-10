import { getCompaniesWithKeyIndicator } from "@/services/stocks";
import { Company, columns } from "./columns";
import { DataTable } from "./data-table";
import { ICompanyWithKeyIndicator } from "@/types/company";
import { IApiResponse } from "@/types/customTypes";
const transformToCompany = (
  companyWithIndicator: ICompanyWithKeyIndicator
): Company => ({
  ...companyWithIndicator,
  ...companyWithIndicator.keyIndicator,
});

async function getData(): Promise<Company[]> {
  // Fetch data from your API here.
  const res: any = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`);

  const data: IApiResponse<ICompanyWithKeyIndicator> = await res.json();
  const companies: Company[] = data.data.content.map(transformToCompany);

  return companies;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
