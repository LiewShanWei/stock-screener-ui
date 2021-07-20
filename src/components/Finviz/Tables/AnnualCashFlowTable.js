import annualCashFlowColumns from "../Columns/AnnualCashFlowColumns";
import BaseStatementTable from "./BaseStatementTable";

const AnnualCashFlowTable = (props) => {
    return (
        <BaseStatementTable 
            title="Annual Cash Flow"
            columns={annualCashFlowColumns}
            selectedTickers={props.selectedTickers}
            period={props.period}
            statementType={props.statementType}
        />
    );
};

export default AnnualCashFlowTable;