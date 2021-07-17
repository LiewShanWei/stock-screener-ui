import { incomeStatementColumns } from "./Columns";
import BaseStatementTable from "./BaseStatementTable";

const IncomeStatementTable = (props) => {
    return (
        <BaseStatementTable 
            title="Income Statement"
            columns={incomeStatementColumns}
            selectedTickers={props.selectedTickers}
            period={props.period}
            statementType={props.statementType}
        />
    )
};

export default IncomeStatementTable;