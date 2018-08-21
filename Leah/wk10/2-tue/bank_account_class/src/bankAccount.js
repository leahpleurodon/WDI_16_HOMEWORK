class BankAccount {

    constructor(bal = 0, typ = "checking" ) {
        this.bal = bal
        this.typ = typ
        this.txHistory = []
    }

    balance(){
        return this.bal
    }

    showBalance(){
        return `$${this.bal.toFixed(2)}`
    }

    type(){
        return this.typ
    }

    withdraw(num){
        if(num > 0){
            this.bal -= num
            this.txHistory.push(`- $${num.toFixed(2)} = $${this.bal.toFixed(2)}`)
        }
    }

    deposit(num){
        if(num > 0){
            this.bal += num
            this.txHistory.push(`+ $${num.toFixed(2)} = $${this.bal.toFixed(2)}`)
        }
    }

    transactionHistory(){
        return this.txHistory
    }
}

module.exports = BankAccount