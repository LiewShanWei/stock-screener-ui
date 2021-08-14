const annualBalanceSheet = 'annualBalanceSheet';

const annualBalanceSheetColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Period End',
        selector: row => row[annualBalanceSheet]['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Cash and Equivalents',
        selector: row => row[annualBalanceSheet]['data']['Cash and Equivalents'][0],
        sortable: true
    },
    {
        name: 'Short Term Investments',
        selector: row => row[annualBalanceSheet]['data']['Short Term Investments'][0],
        sortable: true
    },
    {
        name: 'Cash and Short Term Investments',
        selector: row => row[annualBalanceSheet]['data']['Cash and Short Term Investments'][0],
        sortable: true
    },
    {
        name: 'Accounts Receivable - Trade, Net',
        selector: row => row[annualBalanceSheet]['data']['Accounts Receivable - Trade, Net'][0],
        sortable: true
    },
    {
        name: 'Total Receivables, Net',
        selector: row => row[annualBalanceSheet]['data']['Total Receivables, Net'][0],
        sortable: true
    },
    {
        name: 'Total Inventory',
        selector: row => row[annualBalanceSheet]['data']['Total Inventory'][0],
        sortable: true
    },
    {
        name: 'Total Current Assets',
        selector: row => row[annualBalanceSheet]['data']['Total Current Assets'][0],
        sortable: true
    },
    {
        name: 'Property, Plant And Equipment - Gross',
        selector: row => row[annualBalanceSheet]['data']['Property, Plant And Equipment - Gross'][0],
        sortable: true
    },
    {
        name: 'Property, Plant And Equipment - Net',
        selector: row => row[annualBalanceSheet]['data']['Property, Plant And Equipment - Net'][0],
        sortable: true
    },
    {
        name: 'Goodwill, Net',
        selector: row => row[annualBalanceSheet]['data']['Goodwill, Net'][0],
        sortable: true
    },
    {
        name: 'Intangibles, Net',
        selector: row => row[annualBalanceSheet]['data']['Intangibles, Net'][0],
        sortable: true
    },
    {
        name: 'Long Term Investments',
        selector: row => row[annualBalanceSheet]['data']['Long Term Investments'][0],
        sortable: true
    },
    {
        name: 'Other Long Term Assets',
        selector: row => row[annualBalanceSheet]['data']['Other Long Term Assets'][0],
        sortable: true
    },
    {
        name: 'Total Assets',
        selector: row => row[annualBalanceSheet]['data']['Total Assets'][0],
        sortable: true
    },
    {
        name: 'Accounts Payable',
        selector: row => row[annualBalanceSheet]['data']['Accounts Payable'][0],
        sortable: true
    },
    {
        name: 'Accrued Expenses',
        selector: row => row[annualBalanceSheet]['data']['Accrued Expenses'][0],
        sortable: true
    },
    {
        name: 'Notes Payable/Short Term Debt',
        selector: row => row[annualBalanceSheet]['data']['Notes Payable/Short Term Debt'][0],
        sortable: true
    },
    {
        name: 'Current Port. of LT Debt/Capital Leases',
        selector: row => row[annualBalanceSheet]['data']['Current Port. of LT Debt/Capital Leases'][0],
        sortable: true
    },
    {
        name: 'Other Current liabilities',
        selector: row => row[annualBalanceSheet]['data']['Other Current liabilities'][0],
        sortable: true
    },
    {
        name: 'Total Current Liabilities',
        selector: row => row[annualBalanceSheet]['data']['Total Current Liabilities'][0],
        sortable: true
    },
    {
        name: 'Long Term Debt',
        selector: row => row[annualBalanceSheet]['data']['Long Term Debt'][0],
        sortable: true
    },
    {
        name: 'Capital Lease Obligations',
        selector: row => row[annualBalanceSheet]['data']['Capital Lease Obligations'][0],
        sortable: true
    },
    {
        name: 'Other Long Term Assets',
        selector: row => row[annualBalanceSheet]['data']['Other Long Term Assets'][0],
        sortable: true
    },
    {
        name: 'Total Long Term Debt',
        selector: row => row[annualBalanceSheet]['data']['Total Long Term Debt'][0],
        sortable: true
    },
    {
        name: 'Total Debt',
        selector: row => row[annualBalanceSheet]['data']['Total Debt'][0],
        sortable: true
    },
    {
        name: 'Other Liabilities',
        selector: row => row[annualBalanceSheet]['data']['Other Liabilities'][0],
        sortable: true
    },
    {
        name: 'Total Liabilities',
        selector: row => row[annualBalanceSheet]['data']['Total Liabilities'][0],
        sortable: true
    },
    {
        name: 'Common Stock',
        selector: row => row[annualBalanceSheet]['data']['Common Stock'][0],
        sortable: true
    },
    {
        name: 'Additional Paid-In Capital',
        selector: row => row[annualBalanceSheet]['data']['Additional Paid-In Capital'][0],
        sortable: true
    },
    {
        name: 'Retained Earnings',
        selector: row => row[annualBalanceSheet]['data']['Retained Earnings'][0],
        sortable: true
    },
    {
        name: 'Unrealized Gain (Loss)',
        selector: row => row[annualBalanceSheet]['data']['Unrealized Gain (Loss)'][0],
        sortable: true
    },
    {
        name: 'Other Equity',
        selector: row => row[annualBalanceSheet]['data']['Other Equity'][0],
        sortable: true
    },
    {
        name: 'Total Equity',
        selector: row => row[annualBalanceSheet]['data']['Total Equity'][0],
        sortable: true
    },
    {
        name: 'Total Liabilities and Equity',
        selector: row => row[annualBalanceSheet]['data']['Total Liabilities and Equity'][0],
        sortable: true
    },
    {
        name: 'Total Common Shares Outstanding',
        selector: row => row[annualBalanceSheet]['data']['Total Common Shares Outstanding'][0],
        sortable: true
    },
    {
        name: 'Full-Time Employees',
        selector: row => row[annualBalanceSheet]['data']['Full-Time Employees'][0],
        sortable: true
    },
    {
        name: 'Number of Common Shareholders',
        selector: row => row[annualBalanceSheet]['data']['Number of Common Shareholders'][0],
        sortable: true
    }
]

export default annualBalanceSheetColumns;