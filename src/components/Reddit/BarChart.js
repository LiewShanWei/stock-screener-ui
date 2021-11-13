import Chart from "react-google-charts";

const BarChart = (props) => {
    const chartType = "Bar";

    const options = 
    {
        title: props.optionsTitle,
        chartArea: { width:'50%'},
        isStacked: props.isStacked,
        hAxis: {
            title: props.optionsHAxisTitle
        },
        vAxis: {
            title: props.optionsVAxisTitle,
            minValue: 0
        }
    };

    return (
        <Chart
            width = {props.width}
            height = {props.height}
            chartType = {chartType}
            isStacked={props.isStacked}
            loader = {<div>Loading Chart...</div>}
            data = {props.data}
            options = {options}
        />
    );
};

export default BarChart;