export const fetchCountries = async () => {
    try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (response.ok) {
        const data = await response.json();
        // Filtrer les données pour obtenir uniquement les informations nécessaires : country, flag, region, capital
        const countries = data.map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
        region: country.region,
        capital: country.capital,
        }));
        return countries;
    }
    throw new Error('Failed to fetch countries');
    } catch (error) {
    console.error(error);
    throw error;
    }
};
