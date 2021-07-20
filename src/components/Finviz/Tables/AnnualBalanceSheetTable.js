import annualBalanceSheetColumns from "../Columns/AnnualBalanceSheetColumns";
import BaseStatementTable from "./BaseStatementTable";

const AnnualBalanceSheetTable = (props) => {
    return (
        <BaseStatementTable 
            title="Annual Balance Sheet"
            columns={annualBalanceSheetColumns}
            selectedTickers={props.selectedTickers}
            period={props.period}
            statementType={props.statementType}
        />
    );
};

export default AnnualBalanceSheetTable