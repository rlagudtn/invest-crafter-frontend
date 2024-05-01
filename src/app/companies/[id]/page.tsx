import { SingleCompany } from "@/containers/single-company/singleCompany";

export default async function SingleCompanyPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div className="flex w-full">
      <SingleCompany id={params.id} />
    </div>
  );
}
