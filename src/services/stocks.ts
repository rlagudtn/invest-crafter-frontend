// services/api.js
const getCompaniesWithKeyIndicator = async (page: number, size: number,sort:string|null) => {
  let url: string = `${process.env.NEXT_PUBLIC_SPRING_BACKEND_URL}/stocks?page=${page}&size=${size}`;
  sort !== null ? url += `&sort=${sort}` : "";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch home data');
  }
  return response.json();
}

export { getCompaniesWithKeyIndicator };
