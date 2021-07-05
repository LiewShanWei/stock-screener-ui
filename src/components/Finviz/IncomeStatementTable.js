import Table from "../../UI/Table"

const columns = [
    {
        name: 'Ticker',
        selector: 'ticker',
        sortable: true
    },
    {
        name: 'Period End',
        selector: 'end_date',
        sortable: false
    },
    {
        name: 'Period Length',
        selector: 'period_length',
        sortable: false
    },
    {
        name: 'Total Revenue',
        selector: 'total_revenue',
        sortable: true
    },
    {
        name: 'Cost of Revenue',
        selector: 'costof_revenue',
        sortable: true
    },
    {
        name: 'Gross Profit',
        selector: 'gross_profit',
        sortable: true
    },
    {
        name: 'Selling/General/Admin',
        selector: 'selling_general_admin',
        sortable: true
    },
    {
        name: 'R&D',
        selector: 'research_development',
        sortable: true
    },
    {
        name: 'Unusual Expense/Income',
        selector: 'unusual_exp_inc',
        sortable: true
    },
    {
        name: 'Total Operating Expense',
        selector: 'total_operating_expense',
        sortable: true
    },
    {
        name: 'Operating Income',
        selector: 'operating_income',
        sortable: true
    },
    {
        name: 'Interest Income Net',
        selector: 'interest_income_net',
        sortable: true
    },
    {
        name: 'Other Income Net',
        selector: 'other_income_net',
        sortable: true
    },
    {
        name: 'Net Income before Taxes',
        selector: 'net_income_before_taxes',
        sortable: true
    },
    {
        name: 'Provision for Income Taxes',
        selector: 'provision_income_taxes',
        sortable: true
    },
    {
        name: 'Net Income',
        selector: 'net_income',
        sortable: true
    },
    {
        name: 'Income Avail to Common Excl Extraord',
        selector: 'income_avail_common_excl_extr',
        sortable: true
    },
    {
        name: 'Income Avail to Common Incl Extraord',
        selector: 'income_avail_common_incl_extr',
        sortable: true
    },
    {
        name: 'Diluted Average Shares',
        selector: 'diluted_average_shares',
        sortable: true
    },
    {
        name: 'Diluted EPS Excl Extraord',
        selector: 'diluted_eps_excl_extr',
        sortable: true
    },
    {
        name: 'Diluted EPS Incl. Extraord',
        selector: 'diluted_eps_incl_extr',
        sortable: true
    }
]

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
            columns={columns}
            data={mockData}
        />
    )
};

export default IncomeStatementTable;