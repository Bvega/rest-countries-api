// Fetches all countries
export async function fetchAllCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error('Failed to fetch countries');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}
