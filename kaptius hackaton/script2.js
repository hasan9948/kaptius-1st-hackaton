
document.addEventListener("DOMContentLoaded", () => {
    let popup=document.querySelector('.popup')
    let expenditureForm = document.querySelector("#expenditureForm");
    const root =document.querySelector(":root")
    root.style.setProperty('--hue-primary',localStorage.getItem('hue'))

    let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
    let expenditureRecords = JSON.parse(localStorage.getItem("expenditureRecords")) || [];

    expenditureForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let description = document.querySelector("#expDesc").value;
        let amount = parseFloat(document.querySelector("#expAmount").value);

        if (isNaN(amount) || amount <= 0) {
            // alert("Please enter a valid positive amount for expenditure.");
            popup.innerHTML = 'Please enter a valid positive amount for expenditure.';
            popup.style.backgroundColor = "#ee5253";
            popup.style.color='#fff'

            return;
        }

        if (amount > totalAmount) {
            // alert("Expenditure cannot exceed the current total amount.");
            popup.innerHTML = 'Expenditure cannot exceed the current total amount.';
            popup.style.backgroundColor = "#ee5253";
            popup.style.color='#fff'

            return;
        }
        popup.innerHTML = '';
        popup.style.backgroundColor = "#fff";
        popup.style.color = '#fff'
        

        totalAmount -= amount;
        expenditureRecords.push({ date: new Date().toLocaleString(), description, amount,id:"ex" });

        localStorage.setItem("totalAmount", totalAmount);
        localStorage.setItem("expenditureRecords", JSON.stringify(expenditureRecords));

        window.location.href = 'index.html';
    });
});
