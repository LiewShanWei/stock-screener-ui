import { cashFlowColumns } from "./Columns";
import BaseStatementTable from "./BaseStatementTable";

const CashFlowTable = (props) => {
    return (
        <BaseStatementTable 
            title="Cash Flow"
            columns={cashFlowColumns}
            selectedTickers={props.selectedTickers}
            period={props.period}
            statementType={props.statementType}
        />
    );
};

export default CashFlowTable;