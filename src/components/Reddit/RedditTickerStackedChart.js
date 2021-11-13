import { useEffect, useState } from "react";
import BarChart from "./BarChart";

const RedditTickerStackedChart = (props) => {
    const [data,setData] = useState([["Tickers","Count"]]);

    const width = "500px";
    const height = "300px";
    const optionsTitle = "Reddit's Most popular Tickers";
    const isStacked = false;
    const optionsHAxisTitle = "Tickers";
    const optionsVAxisTitle = "Count";

    const buildTickerInfo = () => {
        if(props.tickerLabels.length !== props.tickerCounts.length)
            alert("Labels and counts not in sync");
        else {
            for(let i=0;i<props.tickerLabels.length;i++){
                let ticker = [props.tickerLabels[i], props.tickerCounts[i]];
                setData(prevState => [...prevState, ticker]);
            }
        }
    };

    useEffect(() => {
        buildTickerInfo();
    }, []);

    return (
        <BarChart
            width={width}
            height={height}
            optionsTitle={optionsTitle}
            data={data}
            isStacked={isStacked}
            optionsHAxisTitle={optionsHAxisTitle}
            optionsVAxisTitle={optionsVAxisTitle}
        />
    );
};

export default RedditTickerStackedChart;