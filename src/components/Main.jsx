import { useState, useEffect } from 'react';
import { getYears, getBankHolidays, getCountries } from '../utils/dataHelpers';
import Dropdown from './Dropdown';
import Holidays from './Holidays';

export default function Main() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState([]);
    const [division, setDivision] = useState("england-and-wales");
    const [bankHolidays, setBankHolidays] = useState([]);

    useEffect(() => {
        getYears()
            .then(years => setYears([...years]))
            .catch(error => {
                console.error("Error fetching years:", error);
                setYears([]);
            });
    }, []);

    useEffect(() => {
        getBankHolidays(division, year)
            .then(bankHolidays => setBankHolidays(bankHolidays || []))
            .catch(error => {
                console.error("Error fetching bank holidays:", error);
                setBankHolidays([]);
            });
    }, [division, year]);

    useEffect(() => {
        getCountries()
            .then(countries => setCountries([...countries]))
            .catch(error => {
                console.error("Error fetching countries:", error);
                setCountries([]);
            });

    }, []);

    function handleCountryChange(e) {
        setDivision(e.target.value);
    };

    function handleYearChange(e) {
        setYear(Number(e.target.value));
    };

    return (
        <main>
            <div id='dropdown-container'>
                <Dropdown options={countries} selectedValue={division} onSelectChange={handleCountryChange} />
                <Dropdown options={years} selectedValue={year} onSelectChange={handleYearChange} />
            </div>
            <Holidays events={bankHolidays} selectedYear={year} />
        </main>
    )
}
