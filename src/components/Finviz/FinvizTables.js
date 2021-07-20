import React from "react";
import AnnualBalanceSheetTable from "./AnnualBalanceSheetTable";
import AnnualCashFlowTable from "./AnnualCashFlowTable";
import AnnualIncomeStatementTable from "./AnnualIncomeStatementTable";

const FinvizTables = (props) => {

    return (
        <React.Fragment >
            <AnnualIncomeStatementTable 
                selectedTickers={props.selectedTickers}
                period="annual"
                statementType="IncomeStatement"/>
            <AnnualBalanceSheetTable 
                selectedTickers={props.selectedTickers}
                period="annual"
                statementType="BalanceSheet"/>
            <AnnualCashFlowTable
                selectedTickers={props.selectedTickers}
                period="annual"
                statementType="CashFlow" />
        </React.Fragment>
    )
};

export default FinvizTables;