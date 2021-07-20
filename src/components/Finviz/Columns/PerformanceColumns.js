const performanceColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Annual Period End',
        selector: row => row['annualCashFlow']['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Annual Period End',
        selector: row => row['annualCashFlow']['data']['Period End Date'][1],
        sortable: false
    },
    {
        name: 'Annual Period End',
        selector: row => row['annualCashFlow']['data']['Period End Date'][2],
        sortable: false
    },
    {
        name: 'Total Revenue',
        selector: row => row['annualIncomeStatement']['data']['Total Revenue'][0],
        sortable: true
    },
    {
        name: 'Total Revenue',
        selector: row => row['annualIncomeStatement']['data']['Total Revenue'][1],
        sortable: true
    },
    {
        name: 'Total Revenue',
        selector: row => row['annualIncomeStatement']['data']['Total Revenue'][2],
        sortable: true
    },
    {
        name: 'Net Income',
        selector: row => row['annualCashFlow']['data']['Net Income'][0],
        sortable: true
    },
    {
        name: 'Net Income',
        selector: row => row['annualCashFlow']['data']['Net Income'][1],
        sortable: true
    },
    {
        name: 'Net Income',
        selector: row => row['annualCashFlow']['data']['Net Income'][2],
        sortable: true
    },
    {
        name: 'Total Current Assets',
        selector: row => row['annualBalanceSheet']['data']['Total Current Assets'][0],
        sortable: true
    },
    {
        name: 'Total Current Assets',
        selector: row => row['annualBalanceSheet']['data']['Total Current Assets'][1],
        sortable: true
    },
    {
        name: 'Total Current Assets',
        selector: row => row['annualBalanceSheet']['data']['Total Current Assets'][2],
        sortable: true
    },
    {
        name: 'Total Assets',
        selector: row => row['annualBalanceSheet']['data']['Total Assets'][0],
        sortable: true
    },
    {
        name: 'Total Assets',
        selector: row => row['annualBalanceSheet']['data']['Total Assets'][1],
        sortable: true
    },
    {
        name: 'Total Assets',
        selector: row => row['annualBalanceSheet']['data']['Total Assets'][2],
        sortable: true
    },
    {
        name: 'Total Liabilities',
        selector: row => row['annualBalanceSheet']['data']['Total Liabilities'][0],
        sortable: true
    },
    {
        name: 'Total Liabilities',
        selector: row => row['annualBalanceSheet']['data']['Total Liabilities'][1],
        sortable: true
    },
    {
        name: 'Total Liabilities',
        selector: row => row['annualBalanceSheet']['data']['Total Liabilities'][2],
        sortable: true
    },
    {
        name: 'Cash from Operating ',
        selector: row => row['annualCashFlow']['data']['Cash from Operating Activities'][0],
        sortable: true
    },
    {
        name: 'Cash from Operating',
        selector: row => row['annualCashFlow']['data']['Cash from Operating Activities'][1],
        sortable: true
    },
    {
        name: 'Cash from Operating',
        selector: row => row['annualCashFlow']['data']['Cash from Operating Activities'][2],
        sortable: true
    },
    {
        name: 'Cash from Investing',
        selector: row => row['annualCashFlow']['data']['Cash from Investing Activities'][0],
        sortable: true
    },
    {
        name: 'Cash from Investing',
        selector: row => row['annualCashFlow']['data']['Cash from Investing Activities'][1],
        sortable: true
    },
    {
        name: 'Cash from Investing',
        selector: row => row['annualCashFlow']['data']['Cash from Investing Activities'][2],
        sortable: true
    },
    {
        name: 'Net Cash - Ending',
        selector: row => row['annualCashFlow']['data']['Net Cash - Ending Balance'][0],
        sortable: true
    },
    {
        name: 'Net Cash - Ending',
        selector: row => row['annualCashFlow']['data']['Net Cash - Ending Balance'][1],
        sortable: true
    },
    {
        name: 'Net Cash - Ending',
        selector: row => row['annualCashFlow']['data']['Net Cash - Ending Balance'][2],
        sortable: true
    },
    {
        name: 'Net Change in Cash',
        selector: row => row['annualCashFlow']['data']['Net Change in Cash'][0],
        sortable: true
    },
    {
        name: 'Net Change in Cash',
        selector: row => row['annualCashFlow']['data']['Net Change in Cash'][1],
        sortable: true
    },
    {
        name: 'Net Change in Cash',
        selector: row => row['annualCashFlow']['data']['Net Change in Cash'][2],
        sortable: true
    }
]

export default performanceColumns;