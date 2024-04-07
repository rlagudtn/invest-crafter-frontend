// services/api.js
const getCompaniesWithKeyIndicator = async( query:string) => {
  let url: string = `${process.env.NEXT_PUBLIC_SPRING_BACKEND_URL}/stocks?${query}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch home data');
  }
  return response.json();
}

export { getCompaniesWithKeyIndicator };
