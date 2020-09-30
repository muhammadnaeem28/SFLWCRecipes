import { LightningElement } from 'lwc';


const eTradeColumns = [
    {label: 'Creditor', fieldName: 'Creditor', type: 'text'},
    {label: 'Account Number', fieldName: 'AccountNumber', type: 'text'},
    {label: 'Last Reported', fieldName: 'LastReported', type: 'Date'},
    {label: 'Last Activity', fieldName: 'LastActivity', type: 'Date'},
    {label: 'Days Delinquent', fieldName: 'DaysDelinquent', type: 'Number'},
    {label: 'Credit Utilization', fieldName: 'CreditUtilization', type: 'Percent'},
    {label: 'Monthly Payment', fieldName: 'MonthlyPayment', type: 'Currency'},
    {label: 'Past Due', fieldName: 'PastDue', type: 'Currency'},
    {label: 'Balance', fieldName: 'Balance', type: 'Currency'},
    {label: 'Owner', fieldName: 'Owner', type: 'text'},
];


const ineTradeColumns = [
    {label: 'Creditor', fieldName: 'Creditor', type: 'text'},
    {label: 'Account Number', fieldName: 'AccountNumber', type: 'text'},
    {label: 'Last Reported', fieldName: 'LastReported', type: 'Date'},
    {label: 'Last Activity', fieldName: 'LastActivity', type: 'Date'},
    {label: 'Days Delinquent', fieldName: 'DaysDelinquent', type: 'Number'},
    {label: 'Credit Utilization', fieldName: 'CreditUtilization', type: 'Percent'},
    {label: 'Monthly Payment', fieldName: 'MonthlyPayment', type: 'Currency'},
    {label: 'Past Due', fieldName: 'PastDue', type: 'Currency'},
    {label: 'Balance', fieldName: 'Balance', type: 'Currency'},
    {label: 'Owner', fieldName: 'Owner', type: 'text'},
    {label: 'Ineligibility Reason', fieldName: 'IneligibilityReason', type: 'text'},
];


const eData = [{
        id: 'a2',
        Creditor:	'Capital Two',
        AccountNumber:	'**********6789',
        AccountType:	'Homeloan',
        LastActivity:	'3/10',
        DaysDelinquent:	'160+',
        CreditUtilization:	'140%',
        MonthlyPayment:	'200',
        PastDue:	'2500',
        Balance:	'62000',
        Owner:	'Singline',
        LastReported:	'7/19'
    },
    {
        id: 'b',
        Creditor:	'Capital One',
        AccountNumber:	'**********1234',
        AccountType:	'Credit Card',
        LastActivity:	'3/20',
        DaysDelinquent:	'120+',
        CreditUtilization:	'110%',
        MonthlyPayment:	'400',
        PastDue:	'1500',
        Balance:	'22000',
        Owner:	'Joint',
        LastReported:	'7/20',
        IneligibilityReason:	'Not enough Debt'
    }];


const ineData = [{
                    id: 'a',
                    Creditor:	'Capital One',
                    AccountNumber:	'**********1234',
                    AccountType:	'Credit Card',
                    LastActivity:	'3/20',
                    DaysDelinquent:	'120+',
                    CreditUtilization:	'110%',
                    MonthlyPayment:	'400',
                    PastDue:	'1500',
                    Balance:	'22000',
                    Owner:	'Joint',
                    LastReported:	'7/20',
                    IneligibilityReason:	'Not enough Debt'
                },
                {
                    id: 'b',
                    Creditor:	'Capital One',
                    AccountNumber:	'**********1234',
                    AccountType:	'Credit Card',
                    LastActivity:	'3/20',
                    DaysDelinquent:	'120+',
                    CreditUtilization:	'110%',
                    MonthlyPayment:	'400',
                    PastDue:	'1500',
                    Balance:	'22000',
                    Owner:	'Joint',
                    LastReported:	'7/20',
                    IneligibilityReason:	'Not enough Debt'
                }];

export default class DatatableExample extends LightningElement {
    eData = eData;
    eColumns = eTradeColumns;

    ineData = ineData;
    ineColumns = ineTradeColumns;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            //alert("You selected: " + selectedRows[i].opportunityName);
        }
    }


    activeSections = ['A', 'B'];
}