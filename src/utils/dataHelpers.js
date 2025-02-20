export function getYears(data) {
    let years = data["england-and-wales"]["events"]
        .map(element => new Date(element.date).getFullYear());

    return [...new Set(years)].map(year => ({ name: year.toString(), value: year }));
}

export function getCountries(data) {
    let countries = Object.keys(data);

    return countries.map(country => ({
        name: country.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' '),
        value: country.toString()
    }));
}

export function getBankHolidays(division, year, data) {
    return data[division]["events"]
        .filter(element => new Date(element.date).getFullYear() == year);
};
