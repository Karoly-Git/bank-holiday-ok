export default async function fetchData() {
    try {
        const response = await fetch("https://www.gov.uk/bank-holidays.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return { "error": error.message };
    }
};


/*export default async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 500)); // Delay

    try {
        const response = await fetch("https://www.gov.uk/bank-holidays.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return { "error": error.message };
    }
}*/


