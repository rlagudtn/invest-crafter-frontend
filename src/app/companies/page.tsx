import "@/containers/companies/companyList";
import { CompanyList } from "@/containers/companies/companyList";
export default async function CompanyPage() {
  return (
    <div className=" py-10">
      <CompanyList />
    </div>
  );
}
