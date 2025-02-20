import { useState, useEffect } from 'react';
import { getYears, getBankHolidays, getCountries } from '../utils/dataHelpers';
import fetchData from '../services/fetchGovApi';
import Dropdown from './Dropdown';
import Holidays from './Holidays';

export default function Main() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState([]);
    const [division, setDivision] = useState("england-and-wales");
    const [bankHolidays, setBankHolidays] = useState([]);

    const [data, setdata] = useState({});

    useEffect(() => {
        fetchData()
            .then(result => {
                setdata(result);
                setCountries(getCountries(result));
                setYears(getYears(result));
                setBankHolidays(getBankHolidays(division, year, result));
            })
    }, [])

    function handleCountryChange(e) {
        const newDivision = e.target.value;
        setDivision(newDivision);
        setBankHolidays(getBankHolidays(newDivision, year, data));
    };

    function handleYearChange(e) {
        let newYear = e.target.value;
        setYear(newYear);
        setBankHolidays(getBankHolidays(division, newYear, data));
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
