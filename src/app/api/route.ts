import {getCompaniesWithKeyIndicator} from "@/services/stocks"

export async function GET() {
  const url: string = `${process.env.NEXT_PUBLIC_BACKEND_URL}/stock?page=5&size=2`;
  console.log('url >>> ',url)
  const companies = await getCompaniesWithKeyIndicator();
  companies.data.content.forEach((element:any) => {
    console.log(element)
  });
  return Response.json(companies);
}