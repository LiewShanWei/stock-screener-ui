import { balanceSheetColumns } from "./Columns";
import BaseStatementTable from "./BaseStatementTable";

const BalanceSheetTable = (props) => {
    return (
        <BaseStatementTable 
            title="Balance Sheet"
            columns={balanceSheetColumns}
            selectedTickers={props.selectedTickers}
            period={props.period}
            statementType={props.statementType}
        />
    );
};

export default BalanceSheetTable