const BankAccount = require("../src/bankAccount.js")

describe('bank account', () => {

    beforeEach(() => {
        account = new BankAccount
    });

    describe("initialisation", () =>{

        test("it initialises with default balance of 0", ()=>{
            expect(account.balance()).toBe(0.00)
        })

        test("it initialises with default type of checking", ()=>{
            expect(account.type()).toBe("checking")
        })
    })

    describe("withdrawal", () =>{

        test("it allows withdrawal of a positive value", ()=>{
            account.withdraw(10)
            expect(account.balance()).toBe(-10.00)
        })

        test("it disallows withdrawal of negative values", ()=>{
            account.withdraw(-10)
            expect(account.balance()).toBe(0.00)
        })
    })

    describe("deposit", () =>{

        test("it allows deposit of a positive value", ()=>{
            account.deposit(10)
            expect(account.balance()).toBe(10.00)
        })

        test("it disallows deposit of negative values", ()=>{
            account.deposit(-10)
            expect(account.balance()).toBe(0.00)
        })
    })
    
    describe("show balance", ()=>{

        test("it should return the balance as a strind with a dollar sign" , ()=>{
            expect(account.showBalance()).toBe('$0.00')
        })
    })
    describe("transaction history", ()=>{
        test("should show the tx in an array" , ()=>{
            account.deposit(10)
            expect(account.transactionHistory()).toEqual(
                ["+ $10.00 = $10.00"]
            )
        })
        test("should order the txes correctly" , ()=>{
            account.deposit(10)
            account.withdraw(6.56)
            account.withdraw(1)
            account.deposit(600)
            expect(account.transactionHistory()).toEqual(
                ["+ $10.00 = $10.00", "- $6.56 = $3.44", "- $1.00 = $2.44", "+ $600.00 = $602.44"]
            )
        })
    })
})