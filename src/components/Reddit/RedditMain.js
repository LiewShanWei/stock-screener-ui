import { Fragment, useState } from "react";
import axios from "axios";
import RedditTickerStackedChart from "./RedditTickerStackedChart";

const RedditMain = () => {
    const defaultTickerColumns = ["Tickers","Count"]; 
    const [tickerData, setTickerData] = useState([defaultTickerColumns]);
    const topTickerCount = 40;

    const onCallRedditClickHandler = () => {
        resetTickerData();
        axios.get("http://localhost:5000/reddit/cache/" + topTickerCount)
        .then(res => {
            for( const[key,value] of Object.entries(res.data)){
                setTickerData(prevState => [...prevState, [value[0],value[1]]]);
            }
        });
    };

    const onCallRedditSyncClickHandler = () => {
        axios.get("http://localhost:5000/reddit")
        .then(res => {
            onCallRedditClickHandler();
        });
    };

    const onCallRedditTestClickHandler = () => {
        axios.get("http://localhost:5000/reddit/test")
        .then(res => {
            onCallRedditClickHandler();
        })
    }

    const resetTickerData = () => {
        setTickerData([defaultTickerColumns]);
    };
    
    return (
        <Fragment>
            <button onClick={onCallRedditClickHandler}>Get Cached Reddit submissions</button>
            <button onClick={onCallRedditSyncClickHandler}> Sync Reddit </button>
            <button onClick={onCallRedditTestClickHandler}> Sync Test Reddit </button>
            <br/><br/><br/><br/>
            <RedditTickerStackedChart tickerData={tickerData} />
        </Fragment>
    )
};

export default RedditMain;