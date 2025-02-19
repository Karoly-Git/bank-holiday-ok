import { useState, useEffect } from 'react';
import { getYears, getBankHolidays, getCountries } from '../utils/dataHelpers';
import Dropdown from './Dropdown';

export default function Main() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState([]);
    const [division, setDivision] = useState("england-and-wales");
    const [bankHolidays, setBankHolidays] = useState([]);

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        getYears()
            .then(years => {
                setYears([...years]);
            });
    }, []);

    useEffect(() => {
        getBankHolidays(division, year)
            .then(bankHolidays => setBankHolidays([...bankHolidays]));
    }, []);

    useEffect(() => {
        getCountries()
            .then(countries => setCountries([...countries]));
    }, []);

    return (
        <main>
            <Dropdown options={countries} />
            <Dropdown options={years} />
            <pre>{JSON.stringify(countries, null, 2)}</pre>
            <pre>{JSON.stringify(years, null, 2)}</pre>
            <pre>{JSON.stringify(bankHolidays, null, 2)}</pre>
        </main>
    )
}
