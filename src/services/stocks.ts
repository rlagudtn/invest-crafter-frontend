
// services/api.js
const getCompaniesWithKeyIndicator = async( query:string) => {
  let url: string = `${process.env.NEXT_PUBLIC_SPRING_BACKEND_URL}/stocks?${query}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch company list data');
  }
  return response.json();
}
const getCompanyWithStatements = async (id: number) => {
  let url = `${process.env.NEXT_PUBLIC_SPRING_BACKEND_URL}/stocks/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch single company data");
  }
  return res.json();
}

export {
  getCompaniesWithKeyIndicator,
  getCompanyWithStatements
};

