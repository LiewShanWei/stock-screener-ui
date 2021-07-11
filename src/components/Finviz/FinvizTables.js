import IncomeStatementTable from "./IncomeStatementTable";

const FinvizTables = (props) => {

    return (
        <IncomeStatementTable 
            selectedTickers={props.selectedTickers}
            period="annual"
            statementType="IncomeStatement"/>
    )
};

export default FinvizTables;