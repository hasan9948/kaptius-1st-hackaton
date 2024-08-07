

let totalAmount = parseFloat(localStorage.getItem("totalAmount")) || 0;
let incomeRecords = JSON.parse(localStorage.getItem("incomeRecords")) || [];
let expenditureRecords = JSON.parse(localStorage.getItem("expenditureRecords")) || [];
const root = document.querySelector(":root")
root.style.setProperty('--hue-primary', localStorage.getItem('hue'))

const totalAmountElem = document.getElementById("totalAmount");
if (totalAmountElem) {
    totalAmountElem.textContent = `$${totalAmount.toFixed(2)}`;
}


let totalAmountfield = document.querySelector('#totalAmount')

if (totalAmount < 50000) {
    totalAmountfield.style.color = '#1dd1a1'
}
else if (totalAmount > 50000 && totalAmount < 100000) {
    totalAmountfield.style.color = '#ff9f43'
}
else {
    totalAmountfield.style.color = '#ee5253'
}




const incomeTableBody = document.querySelector("#incomeTable tbody");
const expenditureTableBody = document.querySelector("#expenditureTable tbody");


function displayincome(incomeRecords) {
    incomeTableBody.innerHTML = "";
    incomeRecords.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${record.date}</td><td>${record.description}</td><td>$${record.amount.toFixed(2)}</td>`;
        incomeTableBody.appendChild(row);
    }); 
}

function displayex(expenditureRecords) {
    expenditureTableBody.innerHTML = "";
    expenditureRecords.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${record.date}</td><td>${record.description}</td><td>$${record.amount.toFixed(2)}</td>`;
        expenditureTableBody.appendChild(row);
    });
}

displayex(expenditureRecords)
displayincome(incomeRecords)

//  filter
let filter=document.querySelector('.filter')
filter.addEventListener('click', (e) => {
    e.preventDefault();
    applyFiltertoincome();
    applyFiltertoexpenditure();
    
})


function applyFiltertoincome() {
    let startDate = new Date(document.querySelector("#startDate").value).getTime() || 0;
    let endDate = new Date(document.querySelector("#endDate").value).getTime() || Infinity;
    let allDataRecords = JSON.parse(localStorage.getItem("incomeRecords")) || [];
    console.log(new Date(startDate).getTime()<new Date(endDate).getTime())

    
     let filteredRecords = allDataRecords.filter(record => {
        let recordDate = record.date;
         console.log(new Date(recordDate).getTime()<new Date(endDate).getTime())
         
        return ( new Date(recordDate).getTime() >= new Date(startDate).getTime() && new Date(recordDate).getTime() <= new Date(endDate).getTime()) ;
    });

    // let filteredRecords = allDataRecords.filter(record => {
    //     let recordDate = record.date;
    //     console.log(new Date(recordDate).getHours())
    //     return recordDate >= startDate && recordDate <= endDate;
    // });

    displayincome(filteredRecords);
}
function applyFiltertoexpenditure() {
    let startDate = new Date(document.querySelector("#startDate").value).getTime() || 0;
    let endDate = new Date(document.querySelector("#endDate").value).getTime() || Infinity;

    let allDataRecords = JSON.parse(localStorage.getItem("expenditureRecords")) || [];
    let filteredRecordsex = allDataRecords.filter(record => {
        let recordDate = record.date;
        // return recordDate >= startDate && recordDate <= endDate;
        return ( new Date(recordDate).getTime() >= new Date(startDate).getTime() && new Date(recordDate).getTime() <= new Date(endDate).getTime()) ;

    });

    displayex(filteredRecordsex);
}





// theme
let themebtn = document.querySelector(".theme")
let div = document.querySelector(".colors")
const primarycolor = document.querySelectorAll(".color div")

themebtn.addEventListener('click', () => {
    div.classList.toggle('display')
})

primarycolor.forEach(color => {
    console.log("test")
    let hue;

    color.addEventListener("click", () => {
        primarycolor.forEach(Element => {
            Element.classList.remove("active")
        });
        color.classList.toggle('active')
        if (color.classList.contains('color-1')) {
            localStorage.setItem('hue', 252)
            //   hue=252;
        } else if (color.classList.contains('color-2')) {
            //   hue=118;
            localStorage.setItem('hue', 252)
        }
        else if (color.classList.contains('color-3')) {
            localStorage.setItem('hue', 24)
            //   hue=24;

        } else if (color.classList.contains('color-4')) {
            localStorage.setItem('hue', 525)
            //   hue=525;

        } else if (color.classList.contains('color-5')) {
            localStorage.setItem('hue', 0)
            //   hue=0;

        }
        console.log(localStorage.getItem('hue'))//deguging
        root.style.setProperty('--hue-primary', localStorage.getItem('hue'))
    })
});


