import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from './Search.module.css'
import { useState } from 'react';

const mockTickers = [
    { value: 'SQ', label: 'SQ' },
    { value: 'AMD', label: 'AMD' },
    { value: 'SOFI', label: 'SOFI' },
    { value: 'AEYE', label: 'AEYE' },
    { value: 'AMC', label: 'AMC' },
    { value: 'TTD', label: 'TTD' },
    { value: 'CRM', label: 'CRM' },
    { value: 'MSFT', label: 'MSFT' },
    { value: 'FB', label: 'FB' },
    { value: 'PATH', label: 'PATH' },
    { value: 'AAL', label: 'AAL' },
    { value: 'PINS', label: 'PINS' },
    { value: 'APPS', label: 'APPS' },
    { value: 'BIGC', label: 'BIGC' },
    { value: 'SE', label: 'SE' },
    { value: 'SMAR', label: 'SMAR' },
    { value: 'FSLY', label: 'FSLY' },
    { value: 'DIS', label: 'DIS' },
];

const animatedComponents = makeAnimated();

const Search = (props) => {
    const [selectedTickers, setSelectedTickers] = useState([]);

    const onSelectChangeHandler = (tickers) => {
        setSelectedTickers(tickers);
    };

    const onSearchClickHandler = () => {
        props.onSelect(selectedTickers)
    };

    return (
        <div className={styles.input}>
            <label>Select Tickers to Compare</label>
            <Select
                isMulti
                name="tickerSelection"
                options={mockTickers}
                components={animatedComponents}
                onChange={onSelectChangeHandler}
                closeMenuOnSelect={false}
            />
            <button
                onClick={onSearchClickHandler}>Search</button>
        </div>
    );
};

export default Search;