import { Fragment, useState } from "react";
import axios from "axios";
import RedditTickerStackedChart from "./RedditTickerStackedChart";

const RedditMain = () => {
    const [tickerData, setTickerData] = useState([["Tickers","Count"]]);
    const topTickerCount = 40;

    const onCallRedditClickHandler = () => {
        axios.get("http://localhost:5000/reddit/cache/" + topTickerCount)
        .then(res => {
            for( const[key,value] of Object.entries(res.data)){
                setTickerData(prevState => [...prevState, [value[0],value[1]]]);
            }
        })
    }

    const onCallRedditSyncClickHandler = () => {
        axios.get("http://localhost:5000/reddit")
        .then(res => {
            setTickerData([["Tickers","Count"]]);
            onCallRedditClickHandler();
        })
    }
    
    return (
        <Fragment>
            <button onClick={onCallRedditClickHandler}>Get Cached Reddit submissions</button>
            <button onClick={onCallRedditSyncClickHandler}> Sync Reddit </button>
            <RedditTickerStackedChart tickerData={tickerData} />
        </Fragment>
    )
};

export default RedditMain;