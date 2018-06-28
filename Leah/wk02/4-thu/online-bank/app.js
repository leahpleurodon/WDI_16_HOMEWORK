let accounts ={
    "savings": 0,
    "checking":0
};

const savingsBox = document.querySelector(".savings");
savingsBox.style.backgroundColor = "mistyrose";
const checkingBox = document.querySelector(".checking");
checkingBox.style.backgroundColor = "mistyrose";

const savingsBalance = document.getElementById("savings-balance");
const checkingBalance = document.getElementById("checking-balance");
const savWithdrawBtn = document.getElementById("savings-withdraw");
const chkWithdrawBtn = document.getElementById("checking-withdraw");
const savDepositBtn = document.getElementById("savings-deposit");
const chkDepositBtn = document.getElementById("checking-deposit");
const savAmtInput = document.getElementById("savings-input");
const chkAmtInput = document.getElementById("checking-input");

const checkFunds= (account,withdrawAmt)=>{
    if(accounts[account] >= withdrawAmt){
        return true;
    }else{
        return false;
    };
};

const deposit= (amount, account)=>{
    account = account.toLowerCase();
    accounts[account] += amount;
    if (accounts[account] > 0){
        document.querySelector("." + account).style.backgroundColor = "whitesmoke";
    }
};

const withdraw= (amount, account)=>{
    account = account.toLowerCase();
    if (checkFunds(account, amount)){
        accounts[account] -= amount;
    };
    if (accounts[account] === 0){
        document.querySelector("." + account).style.backgroundColor = "mistyrose";
    }
};

savWithdrawBtn.addEventListener("click", ()=>{
    withdraw(Number(savAmtInput.value),"savings");
    savingsBalance.innerText = "$" + accounts["savings"].toFixed(2);
});

chkWithdrawBtn.addEventListener("click", ()=>{
    withdraw(Number(chkAmtInput.value),"checking");
    checkingBalance.innerText = "$" + accounts["checking"].toFixed(2);
});

savDepositBtn.addEventListener("click", ()=>{
    deposit(Number(savAmtInput.value),"savings");
    savingsBalance.innerText = "$" + accounts["savings"].toFixed(2);
});

chkDepositBtn.addEventListener("click", ()=>{
    deposit(Number(chkAmtInput.value),"checking");
    checkingBalance.innerText = "$" + accounts["checking"].toFixed(2);
});

