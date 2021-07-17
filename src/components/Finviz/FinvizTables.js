import React from "react";
import BalanceSheetTable from "./BalanceSheetTable";
import CashFlowTable from "./CashFlowTable";
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
            <CashFlowTable
                selectedTickers={props.selectedTickers}
                period="annual"
                statementType="CashFlow" />
        </React.Fragment>
    )
};

export default FinvizTables;