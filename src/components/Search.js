import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from './Search.module.css'
import { useState } from 'react';

const mockTickers = [
    { value: 'SQ', label: 'SQ' },
    { value: 'AMD', label: 'AMD' },
    { value: 'SOFI', label: 'SOFI' },
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
            />
            <button
                onClick={onSearchClickHandler}>Search</button>
        </div>
    );
};

export default Search;