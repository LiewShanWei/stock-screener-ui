import React from "react";
import AnnualBalanceSheetTable from "./Tables/AnnualBalanceSheetTable";
import AnnualCashFlowTable from "./Tables/AnnualCashFlowTable";
import AnnualIncomeStatementTable from "./Tables/AnnualIncomeStatementTable";

const FinvizTableList = (props) => {

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

export default FinvizTableList;