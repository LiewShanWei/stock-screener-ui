const annualCashFlow = 'annualCashFlow';

const annualCashFlowColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Period End',
        selector: row => row[annualCashFlow]['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Period Length',
        selector: row => row[annualCashFlow]['data']['Period Length'][0],
        sortable: false
    },
    {
        name: 'Net Income',
        selector: row => row[annualCashFlow]['data']['Net Income'][0],
        sortable: true
    },
    {
        name: 'Depreciation/Depletion',
        selector: row => row[annualCashFlow]['data']['Depreciation/Depletion'][0],
        sortable: true
    },
    {
        name: 'Amortization',
        selector: row => row[annualCashFlow]['data']['Amortization'][0],
        sortable: true
    },
    {
        name: 'Deferred Taxes',
        selector: row => row[annualCashFlow]['data']['Deferred Taxes'][0],
        sortable: true
    },
    {
        name: 'Non-Cash Items',
        selector: row => row[annualCashFlow]['data']['Non-Cash Items'][0],
        sortable: true
    },
    {
        name: 'Changes in Working Capital',
        selector: row => row[annualCashFlow]['data']['Changes in Working Capital'][0],
        sortable: true
    },
    {
        name: 'Cash from Operating Activities',
        selector: row => row[annualCashFlow]['data']['Cash from Operating Activities'][0],
        sortable: true
    },
    {
        name: 'Capital Expenditures',
        selector: row => row[annualCashFlow]['data']['Capital Expenditures'][0],
        sortable: true
    },
    {
        name: 'Other Investing Cash Flow Items',
        selector: row => row[annualCashFlow]['data']['Other Investing Cash Flow Items'][0],
        sortable: true
    },
    {
        name: 'Cash from Investing Activities',
        selector: row => row[annualCashFlow]['data']['Cash from Investing Activities'][0],
        sortable: true
    },
    {
        name: 'Financing Cash Flow Items',
        selector: row => row[annualCashFlow]['data']['Financing Cash Flow Items'][0],
        sortable: true
    },
    {
        name: 'Total Cash Dividends Paid',
        selector: row => row[annualCashFlow]['data']['Total Cash Dividends Paid'][0],
        sortable: true
    },
    {
        name: 'Issuance (Retirement) of Stock',
        selector: row => row[annualCashFlow]['data']['Issuance (Retirement) of Stock'][0],
        sortable: true
    },
    {
        name: 'Issuance (Retirement) of Debt',
        selector: row => row[annualCashFlow]['data']['Issuance (Retirement) of Debt'][0],
        sortable: true
    },
    {
        name: 'Cash from Financing Activities',
        selector: row => row[annualCashFlow]['data']['Cash from Financing Activities'][0],
        sortable: true
    },
    {
        name: 'Foreign Exchange Effects',
        selector: row => row[annualCashFlow]['data']['Foreign Exchange Effects'][0],
        sortable: true
    },
    {
        name: 'Net Cash - Beginning Balance',
        selector: row => row[annualCashFlow]['data']['Net Cash - Beginning Balance'][0],
        sortable: true
    },
    {
        name: 'Net Cash - Ending Balance',
        selector: row => row[annualCashFlow]['data']['Net Cash - Ending Balance'][0],
        sortable: true
    },
    {
        name: 'Net Change in Cash',
        selector: row => row[annualCashFlow]['data']['Net Change in Cash'][0],
        sortable: true
    },
    {
        name: 'Cash Interest Paid',
        selector: row => row[annualCashFlow]['data']['Cash Interest Paid'][0],
        sortable: true
    },
    {
        name: 'Cash Taxes Paid',
        selector: row => row[annualCashFlow]['data']['Cash Taxes Paid'][0],
        sortable: true
    }
]

export default annualCashFlowColumns;