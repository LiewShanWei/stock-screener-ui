import Table from "../../UI/Table"
import { incomeStatementColumns } from "./Columns";

const mockData = [
    {
        ticker: 'SQ',
        end_date: "1/31/2021",
        period_length: "12 Months",
        total_revenue: "22,350.00",
        costof_revenue: "100",
        gross_profit: "gross p",
        selling_general_admin: "sga",
        research_development: "r&d",
        unusual_exp_inc: "unusual expense/income",
        total_operating_expense: "totalOpExp",
        operating_income: "opin",
        interest_income_net: "interest income net",
        other_income_net: "other income net",
        net_income_before_taxes: "net inbt",
        provision_income_taxes: "prov inc taxx",
        net_income: " netodsadas",
        income_avail_common_excl_extr: "income ava comm excl extr",
        income_avail_common_incl_extr: "income ava comm incl extr",
        diluted_average_shares: "diluted av sh",
        diluted_eps_excl_extr: "diluted eps ex extr",
        diluted_eps_incl_extr: "diluted eps in extr"
    },
    {
        ticker: 'CRM',
        end_date: "1/31/2021",
        period_length: "12 Months",
        total_revenue: "20,350.00"
    },
    {
        ticker: 'TTD',
        end_date: "1/31/2021",
        period_length: "12 Months",
        total_revenue: "21,350.00"
    },
    {
        ticker: 'AMD',
        end_date: "1/31/2021",
        period_length: "12 Months",
        total_revenue: "22,550.00"
    }
]

const IncomeStatementTable = () => {
    return (
        <Table 
            title="Income Statement"
            columns={incomeStatementColumns}
            data={mockData}
        />
    )
};

export default IncomeStatementTable;