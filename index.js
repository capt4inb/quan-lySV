const btnAdd = document.querySelector('#add');
// const api = "./data.json";

// fetch
// fetch(api)
// .then(function (response) {
//     console.log(response);
//     return response.json();
// });
class students {
    constructor(id,name, grade, phone, email){
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.phone = phone;
        this.email = email;
    }
}

// function 
btnAdd.addEventListener('click', function(){ 
    const idStudent = Math.floor(Math.random()*10000);  
    const nameStudent = document.querySelector('#nameStudent').value;
    const gradeStudent = document.querySelector('select').value;
    const phoneStudent = document.querySelector('#phone').value;
    const emailStudent = document.querySelector('#emailStudent').value;

    const student = new students(idStudent,nameStudent, gradeStudent, phoneStudent, emailStudent)
    renderTable(student);
});

// function to create table row
function renderTable(student){
    const tableBody = document.querySelector('tbody');

    const rows = document.createElement('tr');
    tableBody.appendChild(rows);
    rows.classList.add('bg-base-200');
    const idStudent = document.createElement('td');
    idStudent.textContent = student.id;
    rows.appendChild(idStudent);
    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    rows.appendChild(nameCell);
    const gradeCell = document.createElement('td');
    gradeCell.textContent = student.grade;
    rows.appendChild(gradeCell);
    const phoneCell = document.createElement('td');
    phoneCell.textContent = student.phone;
    rows.appendChild(phoneCell);
    const emailCell = document.createElement('td');
    emailCell.textContent = student.email;
    rows.appendChild(emailCell);
    const actionCell =  document.createElement('td');
    rows.appendChild(actionCell);
    actionCell.innerHTML = '<button class="mx-2 edit"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 3a1 1 0 0 1 .117 1.993L13 5H5v14h14v-8a1 1 0 0 1 1.993-.117L21 11v8a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm6.243.343a1 1 0 0 1 1.497 1.32l-.083.095l-9.9 9.899a1 1 0 0 1-1.497-1.32l.083-.094z"/></g></svg></button><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 32 32"><path fill="currentColor" d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0m-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2zM9.388 25.34a3 3 0 0 0 2.98 2.66h7.263a3 3 0 0 0 2.98-2.66L24.48 9H7.521zM13 12.5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"/></svg></button>'

    const editBtn = document.querySelector('.edit');
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(idStudent.innerHTML);
    })
}

