import annualBalanceSheetColumns from "../Columns/AnnualBalanceSheetColumns";
import BaseStatementTable from "./BaseStatementTable";

const AnnualBalanceSheetTable = (props) => {
    return (
        <BaseStatementTable 
            title="Annual Balance Sheet"
            columns={annualBalanceSheetColumns}
            selectedTickers={props.selectedTickers}
        />
    );
};

export default AnnualBalanceSheetTable