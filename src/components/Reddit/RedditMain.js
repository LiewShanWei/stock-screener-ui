import { Fragment, useState } from "react";
import axios from "axios";

const RedditMain = () => {
    const [tickerLabel, setTickerLabel] = useState([]);
    const [tickerCount, setTickerCount] = useState([]);
    const topTickerCount = 10;

    const onCallRedditClickHandler = () => {
        axios.get("http://localhost:5000/reddit/cache/" + topTickerCount)
        .then(res => {
            for( const[key,value] of Object.entries(res.data)){
                setTickerLabel(prevState => [...prevState, key]);
                setTickerCount(prevState => [...prevState, value]);
            }
        })
    }

    return (
        <Fragment>
            <button onClick={onCallRedditClickHandler}>Get Cached Reddit submissions</button>
        </Fragment>
    )
};

export default RedditMain;