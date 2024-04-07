import {getCompaniesWithKeyIndicator} from "@/services/stocks"
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let query = Array.from(searchParams.keys())
    .map((key, index) => `${index > 0 ? '&' : ''}${key}=${searchParams.get(key)}`)
    .join('');
  const companies = await getCompaniesWithKeyIndicator(query);
  
  return Response.json(companies);
}