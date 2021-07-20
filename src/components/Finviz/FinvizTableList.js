import React from "react";
import AnnualBalanceSheetTable from "./Tables/AnnualBalanceSheetTable";
import AnnualCashFlowTable from "./Tables/AnnualCashFlowTable";
import AnnualIncomeStatementTable from "./Tables/AnnualIncomeStatementTable";
import PerformanceTable from "./Tables/PerformanceTable";

const FinvizTableList = (props) => {

    return (
        <React.Fragment >
            <PerformanceTable
                selectedTickers={props.selectedTickers}
                period="annual"
            />
            <AnnualIncomeStatementTable 
                selectedTickers={props.selectedTickers}
                period="annual"
            />
            <AnnualBalanceSheetTable 
                selectedTickers={props.selectedTickers}
                period="annual"
            />
            <AnnualCashFlowTable
                selectedTickers={props.selectedTickers}
                period="annual"
            />
        </React.Fragment>
    )
};

export default FinvizTableList;