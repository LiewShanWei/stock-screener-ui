import performanceColumns from "../Columns/PerformanceColumns";
import BaseStatementTable from "./BaseStatementTable";

const PerformanceTable = (props) => {
    return (
        <BaseStatementTable 
            title="Quarterly Performance Table"
            columns={performanceColumns}
            selectedTickers={props.selectedTickers}
        />
    );
};

export default PerformanceTable