import Table from "../UI/Table";

const columns = [
    {
        name: 'Ticker',
        selector: 'ticker',
        sortable: true
    },
    {
        name: 'Period End Date',
        selector: 'end_date',
        sortable: false
    },
    {
        name: 'Period Length',
        selector: 'period_length',
        sortable: false
    },
    {
        name: 'Total revenue',
        selector: 'total_revenue',
        sortable: true
    }
]

const mockData = [
    {
        ticker: 'SQ',
        end_date: "1/31/2021",
        period_length: "12 Months",
        total_revenue: "22,350.00"
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

const Finviz = () => {
    return (
        <Table 
            title="Stock Balance Sheet Table"
            columns={columns}
            data={mockData}
        />
    )
};

export default Finviz;