const form = document.getElementById("transaction-form")
const totalDisplay = document.getElementById('total-amount');
form.addEventListener('submit', handleSubmit);
// 全データを配列で管理
function handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    const formData = new FormData(form);
    const rawData = Object.fromEntries(formData);

    let transactionData = 
    {
    id: Date.now(),
    ...rawData, 
    amount: Number(rawData.amount)
    };
    addTransaction(transactionData);
}

function addTransaction(transactionData){
    const transactions = [];
    transactions.push(transactionData);
    console.log(transactions);
    saveToLocalStorage(transactions);
}

function saveToLocalStorage(transactions) {
    localStorage.setItem('transaction', JSON.stringify(transactions)); 
}


function loadFromLocalStorage(transactions) {
    const saved = localStorage.getItem('transactions');
    transactionsDisplay = saved ? JSON.parse(saved) : [];
}

function filterByMonth(yearMonth) {
    return transactions.filter(t => 
        t.date.startsWith(yearMonth)
    );
}

