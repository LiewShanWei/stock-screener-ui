const annualIncomeStatementColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true,
    },
    {
        name: 'Period End',
        selector: row => row['annualIncomeStatement']['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Period Length',
        selector: row => row['annualIncomeStatement']['data']['Period Length'][0],
        sortable: false
    },
    {
        name: 'Total Revenue',
        selector: row => row['annualIncomeStatement']['data']['Total Revenue'][0],
        sortable: true
    },
    {
        name: 'Cost of Revenue',
        selector: row => row['annualIncomeStatement']['data']['Cost of Revenue'][0],
        sortable: true
    },
    {
        name: 'Gross Profit',
        selector: row => row['annualIncomeStatement']['data']['Gross Profit'][0],
        sortable: true
    },
    {
        name: 'Selling/General/Admin',
        selector: row => row['annualIncomeStatement']['data']['Selling, General and Administrative'][0],
        sortable: true
    },
    {
        name: 'R&D',
        selector: row => row['annualIncomeStatement']['data']['Research and Development'][0],
        sortable: true
    },
    {
        name: 'Unusual Expense/Income',
        selector: row => row['annualIncomeStatement']['data']['Unusual Expense/Income'][0],
        sortable: true
    },
    {
        name: 'Total Operating Expense',
        selector: row => row['annualIncomeStatement']['data']['Total Operating Expense'][0],
        sortable: true
    },
    {
        name: 'Operating Income',
        selector: row => row['annualIncomeStatement']['data']['Operating Income'][0],
        sortable: true
    },
    {
        name: 'Interest Income Net',
        selector: row => row['annualIncomeStatement']['data']['Interest Income Net'][0],
        sortable: true
    },
    {
        name: 'Other Income Net',
        selector: row => row['annualIncomeStatement']['data']['Other Income Net'][0],
        sortable: true
    },
    {
        name: 'Net Income before Taxes',
        selector: row => row['annualIncomeStatement']['data']['Net Income Before Taxes'][0],
        sortable: true
    },
    {
        name: 'Provision for Income Taxes',
        selector: row => row['annualIncomeStatement']['data']['Provision for Income Taxes'][0],
        sortable: true
    },
    {
        name: 'Net Income',
        selector: row => row['annualIncomeStatement']['data']['Net Income'][0],
        sortable: true
    },
    {
        name: 'Income Avail to Common Excl Extraord',
        selector: row => row['annualIncomeStatement']['data']['Income Avail. to Common Excl. Extraord.'][0],
        sortable: true
    },
    {
        name: 'Income Avail to Common Incl Extraord',
        selector: row => row['annualIncomeStatement']['data']['Income Avail. to Common Incl. Extraord.'][0],
        sortable: true
    },
    {
        name: 'Diluted Average Shares',
        selector: row => row['annualIncomeStatement']['data']['Diluted Average Shares'][0],
        sortable: true
    },
    {
        name: 'Diluted EPS Excl Extraord',
        selector: row => row['annualIncomeStatement']['data']['Diluted EPS Excl. Extraord.'][0],
        sortable: true
    },
    {
        name: 'Diluted EPS Incl. Extraord',
        selector: row => row['annualIncomeStatement']['data']['Diluted EPS Incl. Extraord.'][0],
        sortable: true
    }
]

export default annualIncomeStatementColumns;
