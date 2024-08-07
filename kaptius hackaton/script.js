

let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
let incomeRecords = JSON.parse(localStorage.getItem("incomeRecords")) || [];
let popup = document.querySelector('.popup')
const root =document.querySelector(":root")
    root.style.setProperty('--hue-primary',localStorage.getItem('hue'))

// console.log(expenditureRecords)





//  income form javascript code to store the data in local storage ,like date discription and income amount 
let incomeform = document.querySelector("#incomeForm")

incomeform.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = document.querySelector("#incomeDesc").value;
    const amount = parseFloat(document.querySelector("#incomeAmount").value);
    if (isNaN(amount) || amount <= 0) {
        // alert("Please enter a valid positive amount for income.");
        popup.innerHTML = 'Please enter a valid positive amount for income.';
        popup.style.backgroundColor = "#ee5253";
        popup.style.color='#fff'
        return;
    }
    popup.innerHTML = '';
    popup.style.backgroundColor = "#fff";
    popup.style.color = '#fff'
    
    totalAmount += amount;
    incomeRecords.push({ date: new Date().toLocaleString(), description, amount,id:"in" });
    localStorage.setItem("totalAmount", totalAmount);
    localStorage.setItem("incomeRecords", JSON.stringify(incomeRecords));
    window.location.href = 'index.html';
});






