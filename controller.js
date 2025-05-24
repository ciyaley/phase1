const form = document.getElementById("transaction-form")
const table = document.querySelector("#transactions-table tbody")
const totalDisplay = document.getElementById('total-amount');

const transaction = {
    id: Date.now(), 
    type: 'income' | 'expense', 
    amount: '', 
    category: '', 
    description: '', 
    date: '' 
};


const createTableRow = (transaction) => {
    const row = document.createElement('tr');
    row.innerHTML = `...`;
    return row;
};

form.addEventListener('submit', handleSubmit);



// 全データを配列で管理
let transactions = [];

function handleSubmit(event) {
    event.preventDefault();
}

function addTransaction(transactionData){
    transactions.push(transactonData);
    saveToLocalStorage();
    renderTransactions();
    updateTotals();
}


function renderTransactions(filteredData = transactions) {
    
}

function upadateTotals(){
    const totalIncom = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpense;
}

function saveToLocalStorage() {
    localStorage.setItem('transaction', JSON.stringify(transactions)); 
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('transactions');
    transactions = saved ? JSON.parse(saved) : [];
}

function filterByMonth(yearMonth) {
    return transactions.filter(t => 
        t.date.startsWith(yearMonth)
    );
}

function validateTransaction(data) {
    const errors = [];
    

    if (!data.amount || data.amount <= 0) {
        errors.push('金額は1円以上で入力してください');
    }
    

    if (!data.category) {
        errors.push('カテゴリを選択してください');
    }
    
  
    if (!data.date) {
        errors.push('日付を入力してください');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}