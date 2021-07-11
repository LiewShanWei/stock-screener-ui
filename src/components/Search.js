import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from './Search.module.css'
import { useState } from 'react';

const mockValues = [
    { value: 'SQ', label: 'SQ' },
    { value: 'AMD', label: 'AMD' },
    { value: 'SOFI', label: 'SOFI' },
];

const animatedComponents = makeAnimated();

const Search = () => {
    const [selectedTickers, setSelectedTickers] = useState([]);

    const onSelectHandler = (options) => {
        setSelectedTickers(options);
    };

    const onSearchClickHandler = () => {
        console.log("Selected: " + selectedTickers)
    };

    return (
        <div className={styles.input}>
            <label>Select Tickers to Compare</label>
            <Select
                isMulti
                name="tickerSelection"
                options={mockValues}
                components={animatedComponents}
                onChange={onSelectHandler}
            />
            <button
                onClick={onSearchClickHandler}>Search</button>
        </div>
    );
};

export default Search;