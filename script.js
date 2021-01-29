const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount').value;
    const depositAmountNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById('current-deposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositAmountNumber + currentDepositNumber;
    
    document.getElementById('current-deposit').innerText = totalDeposit; 
    
    document.getElementById('deposit-amount').value = "";
})
