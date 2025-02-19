import fetchData from "../services/fetchGovApi";

export function getYears() {
    return fetchData()
        .then(fetchedData => {
            let years = fetchedData["england-and-wales"]["events"]
                .map(element => new Date(element.date).getFullYear());

            return [...new Set(years)].map(year => ({ name: year.toString(), value: year }));
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

export function getCountries() {
    return fetchData()
        .then(fetchedData => {
            let countries = Object.keys(fetchedData);

            return countries.map(country => ({
                name: country.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(' '),
                value: country.toString()
            }));
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

export function getBankHolidays(division, year) {
    return fetchData()
        .then(fetchedData => {
            return fetchedData[division]["events"]
                .filter(element => new Date(element.date).getFullYear() === year);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
};
