import { useState, useEffect } from 'react';
import { getYears, getBankHolidays, getCountries } from '../utils/dataHelpers';
import Dropdown from './Dropdown';
import Holidays from './Holidays';
import { main } from 'framer-motion/client';

export default function Main() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const [countries, setCountries] = useState([]);
    const [division, setDivision] = useState('england-and-wales');
    const [bankHolidays, setBankHolidays] = useState([]);

    const [isCountryLoading, setIsCountryLoading] = useState(true);
    const [isYearLoading, setIsYearLoading] = useState(true);
    const [isHolidaysLoading, setIsHolidaysLoading] = useState(true);


    useEffect(() => {
        setIsYearLoading(true);
        getYears()
            .then(years => {
                setYears([...years]);
                setIsYearLoading(false);
            })
            .catch(error => {
                console.error('Error fetching years:', error);
                setYears([]);
            });
    }, []);

    useEffect(() => {
        setIsHolidaysLoading(true);
        getBankHolidays(division, year)
            .then(bankHolidays => {
                setBankHolidays(bankHolidays || []);
                setIsHolidaysLoading(false);
            })
            .catch(error => {
                console.error('Error fetching bank holidays:', error);
                setBankHolidays([]);
            });
    }, [division, year]);

    useEffect(() => {
        setIsCountryLoading(true);
        getCountries()
            .then(countries => {
                setCountries([...countries]);
                setIsCountryLoading(false);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
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
                <Dropdown itemName='country' options={countries} selectedValue={division} onSelectChange={handleCountryChange} isLoading={isCountryLoading} />
                <Dropdown itemName='year' options={years} selectedValue={year} onSelectChange={handleYearChange} isLoading={isYearLoading} />
            </div>
            <Holidays events={bankHolidays} selectedYear={year} isLoading={isHolidaysLoading} />
        </main>
    )
}
