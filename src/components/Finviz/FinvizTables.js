import React from "react";
import BalanceSheetTable from "./BalanceSheetTable";
import IncomeStatementTable from "./IncomeStatementTable";

const FinvizTables = (props) => {

    return (
        <React.Fragment >
            <IncomeStatementTable 
                selectedTickers={props.selectedTickers}
                period="annual"
                statementType="IncomeStatement"/>
            <BalanceSheetTable 
                selectedTickers={props.selectedTickers}
                period="annual"
                statementType="BalanceSheet"/>
        </React.Fragment>
    )
};

export default FinvizTables;