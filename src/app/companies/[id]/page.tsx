import { SingleCompany } from "@/containers/single-company/singleCompany";

export default async function SingleCompanyPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div>
      <SingleCompany id={params.id} />
    </div>
  );
}
