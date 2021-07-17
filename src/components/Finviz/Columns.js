export const incomeStatementColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Period End',
        selector: row => row['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Period Length',
        selector: row => row['data']['Period Length'][0],
        sortable: false
    },
    {
        name: 'Total Revenue',
        selector: row => row['data']['Period End Date'][0],
        sortable: true
    },
    {
        name: 'Cost of Revenue',
        selector: row => row['data']['Cost of Revenue'][0],
        sortable: true
    },
    {
        name: 'Gross Profit',
        selector: row => row['data']['Gross Profit'][0],
        sortable: true
    },
    {
        name: 'Selling/General/Admin',
        selector: row => row['data']['Selling, General and Administrative'][0],
        sortable: true
    },
    {
        name: 'R&D',
        selector: row => row['data']['Research and Development'][0],
        sortable: true
    },
    {
        name: 'Unusual Expense/Income',
        selector: row => row['data']['Unusual Expense/Income'][0],
        sortable: true
    },
    {
        name: 'Total Operating Expense',
        selector: row => row['data']['Total Operating Expense'][0],
        sortable: true
    },
    {
        name: 'Operating Income',
        selector: row => row['data']['Operating Income'][0],
        sortable: true
    },
    {
        name: 'Interest Income Net',
        selector: row => row['data']['Interest Income Net'][0],
        sortable: true
    },
    {
        name: 'Other Income Net',
        selector: row => row['data']['Other Income Net'][0],
        sortable: true
    },
    {
        name: 'Net Income before Taxes',
        selector: row => row['data']['Net Income Before Taxes'][0],
        sortable: true
    },
    {
        name: 'Provision for Income Taxes',
        selector: row => row['data']['Provision for Income Taxes'][0],
        sortable: true
    },
    {
        name: 'Net Income',
        selector: row => row['data']['Net Income'][0],
        sortable: true
    },
    {
        name: 'Income Avail to Common Excl Extraord',
        selector: row => row['data']['Income Avail. to Common Excl. Extraord.'][0],
        sortable: true
    },
    {
        name: 'Income Avail to Common Incl Extraord',
        selector: row => row['data']['Income Avail. to Common Incl. Extraord.'][0],
        sortable: true
    },
    {
        name: 'Diluted Average Shares',
        selector: row => row['data']['Diluted Average Shares'][0],
        sortable: true
    },
    {
        name: 'Diluted EPS Excl Extraord',
        selector: row => row['data']['Diluted EPS Excl. Extraord.'][0],
        sortable: true
    },
    {
        name: 'Diluted EPS Incl. Extraord',
        selector: row => row['data']['Diluted EPS Incl. Extraord.'][0],
        sortable: true
    }
]

export const balanceSheetColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Period End',
        selector: row => row['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Cash and Equivalents',
        selector: row => row['data']['Cash and Equivalents'][0],
        sortable: true
    },
    {
        name: 'Short Term Investments',
        selector: row => row['data']['Short Term Investments'][0],
        sortable: true
    },
    {
        name: 'Cash and Short Term Investments',
        selector: row => row['data']['Cash and Short Term Investments'][0],
        sortable: true
    },
    {
        name: 'Accounts Receivable - Trade, Net',
        selector: row => row['data']['Accounts Receivable - Trade, Net'][0],
        sortable: true
    },
    {
        name: 'Total Receivables, Net',
        selector: row => row['data']['Total Receivables, Net'][0],
        sortable: true
    },
    {
        name: 'Total Inventory',
        selector: row => row['data']['Total Inventory'][0],
        sortable: true
    },
    {
        name: 'Total Current Assets',
        selector: row => row['data']['Total Current Assets'][0],
        sortable: true
    },
    {
        name: 'Property, Plant And Equipment - Gross',
        selector: row => row['data']['Property, Plant And Equipment - Gross'][0],
        sortable: true
    },
    {
        name: 'Property, Plant And Equipment - Net',
        selector: row => row['data']['Property, Plant And Equipment - Net'][0],
        sortable: true
    },
    {
        name: 'Goodwill, Net',
        selector: row => row['data']['Goodwill, Net'][0],
        sortable: true
    },
    {
        name: 'Intangibles, Net',
        selector: row => row['data']['Intangibles, Net'][0],
        sortable: true
    },
    {
        name: 'Long Term Investments',
        selector: row => row['data']['Long Term Investments'][0],
        sortable: true
    },
    {
        name: 'Other Long Term Assets',
        selector: row => row['data']['Other Long Term Assets'][0],
        sortable: true
    },
    {
        name: 'Total Assets',
        selector: row => row['data']['Total Assets'][0],
        sortable: true
    },
    {
        name: 'Accounts Payable',
        selector: row => row['data']['Accounts Payable'][0],
        sortable: true
    },
    {
        name: 'Accrued Expenses',
        selector: row => row['data']['Accrued Expenses'][0],
        sortable: true
    },
    {
        name: 'Notes Payable/Short Term Debt',
        selector: row => row['data']['Notes Payable/Short Term Debt'][0],
        sortable: true
    },
    {
        name: 'Current Port. of LT Debt/Capital Leases',
        selector: row => row['data']['Current Port. of LT Debt/Capital'][0],
        sortable: true
    },
    {
        name: 'Other Current liabilities',
        selector: row => row['data']['Other Current liabilities'][0],
        sortable: true
    },
    {
        name: 'Total Current Liabilities',
        selector: row => row['data']['Total Current Liabilities'][0],
        sortable: true
    },
    {
        name: 'Long Term Debt',
        selector: row => row['data']['Long Term Debt'][0],
        sortable: true
    },
    {
        name: 'Capital Lease Obligations',
        selector: row => row['data']['Capital Lease Obligations'][0],
        sortable: true
    },
    {
        name: 'Other Long Term Assets',
        selector: row => row['data']['Other Long Term Assets'][0],
        sortable: true
    },
    {
        name: 'Total Long Term Debt',
        selector: row => row['data']['Total Long Term Debt'][0],
        sortable: true
    },
    {
        name: 'Total Debt',
        selector: row => row['data']['Total Debt'][0],
        sortable: true
    },
    {
        name: 'Other Liabilities',
        selector: row => row['data']['Other Liabilities'][0],
        sortable: true
    },
    {
        name: 'Total Liabilities',
        selector: row => row['data']['Total Liabilities'][0],
        sortable: true
    },
    {
        name: 'Common Stock',
        selector: row => row['data']['Common Stock'][0],
        sortable: true
    },
    {
        name: 'Additional Paid-In Capital',
        selector: row => row['data']['Additional Paid-In Capital'][0],
        sortable: true
    },
    {
        name: 'Retained Earnings',
        selector: row => row['data']['Retained Earnings'][0],
        sortable: true
    },
    {
        name: 'Unrealized Gain (Loss)',
        selector: row => row['data']['Unrealized Gain (Loss)'][0],
        sortable: true
    },
    {
        name: 'Other Equity',
        selector: row => row['data']['Other Equity'][0],
        sortable: true
    },
    {
        name: 'Total Equity',
        selector: row => row['data']['Total Equity'][0],
        sortable: true
    },
    {
        name: 'Total Liabilities and Equity',
        selector: row => row['data']['Total Liabilities and Equity'][0],
        sortable: true
    },
    {
        name: 'Total Common Shares Outstanding',
        selector: row => row['data']['Total Common Shares Outstanding'][0],
        sortable: true
    },
    {
        name: 'Full-Time Employees',
        selector: row => row['data']['Full-Time Employees'][0],
        sortable: true
    },
    {
        name: 'Number of Common Shareholders',
        selector: row => row['data']['Number of Common Shareholders'][0],
        sortable: true
    }
]

export const cashFlowColumns = [
    {
        name: 'Ticker',
        selector: row => row['ticker'],
        sortable: true
    },
    {
        name: 'Period End',
        selector: row => row['data']['Period End Date'][0],
        sortable: false
    },
    {
        name: 'Period Length',
        selector: row => row['data']['Period Length'][0],
        sortable: false
    },
    {
        name: 'Net Income',
        selector: row => row['data']['Net Income'][0],
        sortable: true
    },
    {
        name: 'Depreciation/Depletion',
        selector: row => row['data']['Depreciation/Depletion'][0],
        sortable: true
    },
    {
        name: 'Amortization',
        selector: row => row['data']['Amortization'][0],
        sortable: true
    },
    {
        name: 'Deferred Taxes',
        selector: row => row['data']['Deferred Taxes'][0],
        sortable: true
    },
    {
        name: 'Non-Cash Items',
        selector: row => row['data']['Non-Cash Items'][0],
        sortable: true
    },
    {
        name: 'Changes in Working Capital',
        selector: row => row['data']['Changes in Working Capital'][0],
        sortable: true
    },
    {
        name: 'Cash from Operating Activities',
        selector: row => row['data']['Cash from Operating Activities'][0],
        sortable: true
    },
    {
        name: 'Capital Expenditures',
        selector: row => row['data']['Capital Expenditures'][0],
        sortable: true
    },
    {
        name: 'Other Investing Cash Flow Items',
        selector: row => row['data']['Other Investing Cash Flow Items'][0],
        sortable: true
    },
    {
        name: 'Cash from Investing Activities',
        selector: row => row['data']['Cash from Investing Activities'][0],
        sortable: true
    },
    {
        name: 'Financing Cash Flow Items',
        selector: row => row['data']['Financing Cash Flow Items'][0],
        sortable: true
    },
    {
        name: 'Total Cash Dividends Paid',
        selector: row => row['data']['Total Cash Dividends Paid'][0],
        sortable: true
    },
    {
        name: 'Issuance (Retirement) of Stock',
        selector: row => row['data']['Issuance (Retirement) of Stock'][0],
        sortable: true
    },
    {
        name: 'Issuance (Retirement) of Debt',
        selector: row => row['data']['Issuance (Retirement) of Debt'][0],
        sortable: true
    },
    {
        name: 'Cash from Financing Activities',
        selector: row => row['data']['Cash from Financing Activities'][0],
        sortable: true
    },
    {
        name: 'Foreign Exchange Effects',
        selector: row => row['data']['Foreign Exchange Effects'][0],
        sortable: true
    },
    {
        name: 'Net Cash - Beginning Balance',
        selector: row => row['data']['Net Cash - Beginning Balance'][0],
        sortable: true
    },
    {
        name: 'Net Cash - Ending Balance',
        selector: row => row['data']['Net Cash - Ending Balance'][0],
        sortable: true
    },
    {
        name: 'Net Change in Cash',
        selector: row => row['data']['Net Change in Cash'][0],
        sortable: true
    },
    {
        name: 'Cash Interest Paid',
        selector: row => row['data']['Cash Interest Paid'][0],
        sortable: true
    },
    {
        name: 'Cash Taxes Paid',
        selector: row => row['data']['Cash Taxes Paid'][0],
        sortable: true
    }
]