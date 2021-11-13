import BarChart from "./BarChart";

const RedditTickerStackedChart = (props) => {
    const width = "100%";
    const height = "700px";
    const optionsTitle = "Reddit's Most popular Tickers";
    const isStacked = false;
    const optionsHAxisTitle = "Tickers";
    const optionsVAxisTitle = "Count";

    return (
        <BarChart
            width={width}
            height={height}
            optionsTitle={optionsTitle}
            data={props.tickerData}
            isStacked={isStacked}
            optionsHAxisTitle={optionsHAxisTitle}
            optionsVAxisTitle={optionsVAxisTitle}
        />
    );
};

export default RedditTickerStackedChart;