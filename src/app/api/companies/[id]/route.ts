import { getCompanyWithStatements } from "@/services/stocks";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id=params.id;
  const company=await getCompanyWithStatements(id);

  return Response.json(company);
}