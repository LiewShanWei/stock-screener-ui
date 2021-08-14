const quarterBalanceSheet = 'quarterBalanceSheet';
const quarterCashFlow = 'quarterCashFlow';
const quarterIncomeStatement = 'quarterIncomeStatement';

const annualBalanceSheet = 'annualBalanceSheet';
const annualCashFlow = 'annualCashFlow';
const annualIncomeStatement = 'annualIncomeStatement';

const performanceColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Period End[0]',
        selector: row => row[quarterCashFlow]['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Period End[1]',
        selector: row => row[quarterCashFlow]['data']['Period End Date'][1],
        sortable: false
    },
    {
        name: 'Period End[2]',
        selector: row => row[quarterCashFlow]['data']['Period End Date'][2],
        sortable: false
    },
    {
        name: 'Total Revenue[0]',
        selector: row => row[quarterIncomeStatement]['data']['Total Revenue'][0],
        sortable: true
    },
    {
        name: 'Total Revenue[1]',
        selector: row => row[quarterIncomeStatement]['data']['Total Revenue'][1],
        sortable: true
    },
    {
        name: 'Total Revenue[2]',
        selector: row => row[quarterIncomeStatement]['data']['Total Revenue'][2],
        sortable: true
    },
    {
        name: 'Net Income[0]',
        selector: row => row[quarterCashFlow]['data']['Net Income'][0],
        sortable: true
    },
    {
        name: 'Net Income[1]',
        selector: row => row[quarterCashFlow]['data']['Net Income'][1],
        sortable: true
    },
    {
        name: 'Net Income[2]',
        selector: row => row[quarterCashFlow]['data']['Net Income'][2],
        sortable: true
    },
    {
        name: 'Total Current Assets[0]',
        selector: row => row[quarterBalanceSheet]['data']['Total Current Assets'][0],
        sortable: true
    },
    {
        name: 'Total Current Assets[1]',
        selector: row => row[quarterBalanceSheet]['data']['Total Current Assets'][1],
        sortable: true
    },
    {
        name: 'Total Current Assets[2]',
        selector: row => row[quarterBalanceSheet]['data']['Total Current Assets'][2],
        sortable: true
    },
    {
        name: 'Total Assets[0]',
        selector: row => row[quarterBalanceSheet]['data']['Total Assets'][0],
        sortable: true
    },
    {
        name: 'Total Assets[1]',
        selector: row => row[quarterBalanceSheet]['data']['Total Assets'][1],
        sortable: true
    },
    {
        name: 'Total Assets[2]',
        selector: row => row[quarterBalanceSheet]['data']['Total Assets'][2],
        sortable: true
    },
    {
        name: 'Total Liabilities[0]',
        selector: row => row[quarterBalanceSheet]['data']['Total Liabilities'][0],
        sortable: true
    },
    {
        name: 'Total Liabilities[1]',
        selector: row => row[quarterBalanceSheet]['data']['Total Liabilities'][1],
        sortable: true
    },
    {
        name: 'Total Liabilities[2]',
        selector: row => row[quarterBalanceSheet]['data']['Total Liabilities'][2],
        sortable: true
    },
    {
        name: 'Cash from Operating[0]',
        selector: row => row[quarterCashFlow]['data']['Cash from Operating Activities'][0],
        sortable: true
    },
    {
        name: 'Cash from Operating[1]',
        selector: row => row[quarterCashFlow]['data']['Cash from Operating Activities'][1],
        sortable: true
    },
    {
        name: 'Cash from Operating[2]',
        selector: row => row[quarterCashFlow]['data']['Cash from Operating Activities'][2],
        sortable: true
    },
    {
        name: 'Cash from Investing[0]',
        selector: row => row[quarterCashFlow]['data']['Cash from Investing Activities'][0],
        sortable: true
    },
    {
        name: 'Cash from Investing[1]',
        selector: row => row[quarterCashFlow]['data']['Cash from Investing Activities'][1],
        sortable: true
    },
    {
        name: 'Cash from Investing[2]',
        selector: row => row[quarterCashFlow]['data']['Cash from Investing Activities'][2],
        sortable: true
    },
    {
        name: 'Net Cash - Ending[0]',
        selector: row => row[quarterCashFlow]['data']['Net Cash - Ending Balance'][0],
        sortable: true
    },
    {
        name: 'Net Cash - Ending[1]',
        selector: row => row[quarterCashFlow]['data']['Net Cash - Ending Balance'][1],
        sortable: true
    },
    {
        name: 'Net Cash - Ending[2]',
        selector: row => row[quarterCashFlow]['data']['Net Cash - Ending Balance'][2],
        sortable: true
    },
    {
        name: 'Net Change in Cash[0]',
        selector: row => row[quarterCashFlow]['data']['Net Change in Cash'][0],
        sortable: true
    },
    {
        name: 'Net Change in Cash[1]',
        selector: row => row[quarterCashFlow]['data']['Net Change in Cash'][1],
        sortable: true
    },
    {
        name: 'Net Change in Cash[2]',
        selector: row => row[quarterCashFlow]['data']['Net Change in Cash'][2],
        sortable: true
    }
]

export default performanceColumns;