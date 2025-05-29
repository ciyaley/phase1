const form = document.getElementById("transaction-form")
const totalDisplay = document.getElementById('total-amount');
let transactions = [];

// 全データを配列で管理
function handleSubmit(event) {

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
    transactions.push(transactionData);

    saveToLocalStorage(transactions);
}

function saveToLocalStorage(transactions) {
    localStorage.setItem('transaction', JSON.stringify(transactions)); 
}



function createTableRow() {
    const tbody = document.querySelector('#transaction-table tbody');
    tbody.innerHTML = ''; // Clear existing rows
    const saved = localStorage.getItem("transaction");
    console.log(saved)

    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${saved.date}</td>
            <td>${saved.type}</td>
            <td>${saved.description}</td>
            <td>${saved.amount}</td>
        `;
        tbody.appendChild(row);
    

    // updateTotalAmount();
}

function filterByMonth(yearMonth) {
    return transactions.filter(t => 
        t.date.startsWith(yearMonth)
    );
}

document.addEventListener('DOMContentLoaded', () => {

    createTableRow();
    form.addEventListener('submit', handleSubmit);
});