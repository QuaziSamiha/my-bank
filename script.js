const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-amount').value;
    const depositAmountNumber = parseFloat(depositAmount);

    upDataAmount("current-deposit", depositAmountNumber); // calling function for update deposit section
    upDataAmount("current-balance", depositAmountNumber); // calling function for adding deposit with current balance and update it

    document.getElementById('deposit-amount').value = "";
})

// function for updating deposit and balance section
function upDataAmount(currentAmountId, enteredAmountNumber) {
    const currentAmount = document.getElementById(currentAmountId).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const total = enteredAmountNumber + currentAmountNumber;
    document.getElementById(currentAmountId).innerText = total;
}

// deposit button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    upDataAmount("current-withdraw", withdrawAmountNumber); // calling function for update withdraw section
    upDataAmount("current-balance", (-1*withdrawAmountNumber)); // calling function for subtracting withdraw money from current balance and update it

    document.getElementById('withdraw-amount').value = "";
})

// const currentDeposit = document.getElementById('current-deposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositAmountNumber + currentDepositNumber;
    // document.getElementById('current-deposit').innerText = totalDeposit;

    // const currentBalance = document.getElementById('current-balance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositAmountNumber + currentBalanceNumber;
    // document.getElementById('current-balance').innerText = totalBalance;
