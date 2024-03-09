// services/api.js
const getCompaniesWithKeyIndicator= async ()=> {
  const response = await fetch('http://localhost:8080/stocks');
  if (!response.ok) {
    throw new Error('Failed to fetch home data');
  }
  return response.json();
}

export { getCompaniesWithKeyIndicator };
