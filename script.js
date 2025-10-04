const teachers = [];
const subjects = [];
const classes = [];
const dates = [];

function addTeacher() {
    const name = document.getElementById('teacherName').value.trim();
    if (name) {
        teachers.push(name);
        renderList('teachersList', teachers);
        document.getElementById('teacherName').value = '';
    }
}
function addSubject() {
    const name = document.getElementById('subjectName').value.trim();
    if (name) {
        subjects.push(name);
        renderList('subjectsList', subjects);
        document.getElementById('subjectName').value = '';
    }
}
function addClass() {
    const name = document.getElementById('className').value.trim();
    if (name) {
        classes.push(name);
        renderList('classesList', classes);
        document.getElementById('className').value = '';
    }
}
function selectDate() {
    const date = document.getElementById('datePicker').value;
    if (date && !dates.includes(date)) {
        dates.push(date);
        renderList('datesList', dates);
    }
}
function renderList(listId, items) {
    const ul = document.getElementById(listId);
    ul.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
}
