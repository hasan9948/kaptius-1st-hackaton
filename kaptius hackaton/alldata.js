let incomeRecords = JSON.parse(localStorage.getItem("incomeRecords")) || [];
let expenditureRecords = JSON.parse(localStorage.getItem("expenditureRecords")) || [];
let alldatarecords = [ ...incomeRecords, ...expenditureRecords ]
console.log(alldatarecords,'ll') // decoding
const alldatTableBody = document.querySelector("#alldatatable tbody");
alldatarecords.sort((a, b) => new Date(b.date) - new Date(a.date));
const root =document.querySelector(":root")
root.style.setProperty('--hue-primary',localStorage.getItem('hue'))

console.log(alldatarecords,'ll') // decoding


let displaymenthod = (alldatarecords) => {
    alldatTableBody.innerHTML = "";
    alldatarecords.forEach(record => {
        const row = document.createElement("tr");
        if (record.id == 'ex') {
            
            row.innerHTML = `<td>${record.date}</td><td>${record.description}</td><td>$${record.amount.toFixed(2)}</td>`;
            row.style.backgroundColor='#78e08f'
            alldatTableBody.appendChild(row);
        }
        else {
            row.innerHTML = `<td>${record.date}</td><td>${record.description}</td><td>$${record.amount.toFixed(2)}</td>`;
            row.style.backgroundColor='#60a3bc'
            alldatTableBody.appendChild(row);
        }
    });   
}
displaymenthod(alldatarecords)



// search javascript code

// let inbtn =document.querySelector('.inbtn')
// inbtn.addEventListener('click', () => {
//     let color = document.querySelector('.colorrr')
    
    
// })

let searchdata=document.querySelector(".searchdata")
searchdata.addEventListener("input", () => {
    let inputvalue = document.querySelector(".searchdata").value.toLowerCase()
    let filterdata = alldatarecords.filter(item => {
        return item.description.toLowerCase().includes(inputvalue)
    }) 
    
    displaymenthod(filterdata)
})






