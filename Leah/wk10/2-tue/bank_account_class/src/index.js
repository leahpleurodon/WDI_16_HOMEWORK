const BankAcccount = require("./bankAccount")

let account = new BankAcccount;


const amtInput = document.querySelector(".amt-input")
const withdrawBtn = document.querySelector(".withdraw")
const depositBtn = document.querySelector(".deposit")
const historyBtn = document.querySelector(".show-history")
const historySctn = document.querySelector(".history")
const balSctn = document.querySelector(".balance")




const updateBal = ()=>{
    balSctn.innerText = account.showBalance()
}

updateBal()

withdrawBtn.addEventListener("click",()=>{
    account.withdraw(Number(amtInput.value))
    updateBal()
})

depositBtn.addEventListener("click",()=>{
    account.deposit(Number(amtInput.value))
    updateBal()
})

historyBtn.addEventListener("click",()=>{
    account.transactionHistory().forEach(tx => {
        para = document.createElement("p")
        para.innerText = tx
        historySctn.appendChild(para)
    });
})

