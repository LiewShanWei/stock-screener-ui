import annualIncomeStatementColumns from "./Columns/AnnualIncomeStatementColumns";
import BaseStatementTable from "./BaseStatementTable";

const AnnualIncomeStatementTable = (props) => {
    return (
        <BaseStatementTable 
            title="Annual Income Statement"
            columns={annualIncomeStatementColumns}
            selectedTickers={props.selectedTickers}
            period={props.period}
            statementType={props.statementType}
        />
    )
};

export default AnnualIncomeStatementTable;