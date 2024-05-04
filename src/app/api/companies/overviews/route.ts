import { getCompanyOverviews } from "@/services/stocks";

export async function GET(request: Request) {
  const companies = await getCompanyOverviews();
  return Response.json(companies);
}
