import { Fragment, useState } from "react";
import axios from "axios";
import RedditTickerStackedChart from "./RedditTickerStackedChart";

const RedditMain = () => {
    const [tickerData, setTickerData] = useState([["Tickers","Count"]]);
    const topTickerCount = 10;

    const onCallRedditClickHandler = () => {
        axios.get("http://localhost:5000/reddit/cache/" + topTickerCount)
        .then(res => {
            for( const[key,value] of Object.entries(res.data)){
                setTickerData(prevState => [...prevState, [key,value]]);
            }
        })
    }
    
    return (
        <Fragment>
            <button onClick={onCallRedditClickHandler}>Get Cached Reddit submissions</button>
            <RedditTickerStackedChart tickerData={tickerData} />
        </Fragment>
    )
};

export default RedditMain;