function modifyStudents(students){
    const me = {name: "Aymane", username: "ael-yamo", age: 20, profession: "procrastinator"};
    students.push(me);
    students.unshift(me);
    //creat an array 
    students = students.filter(student => student.username === "ael-yamo")
    students.forEach(student => 
        {
            if(student.age < 20)
            alert("the flucky fluck")
            if (student.username === "Oussama")
            student.age = 20;
        })
    students = students.filter(student => student.age > 19)
    return students;
}
// NO TOUCH ZONE
const table = document.getElementById("table");

function createRow(student)
{
    const tr = document.createElement("tr") // What if you create an element that does not exist ? Try it
    for(const prop in student)
    {
        const td = document.createElement("td");
        td.textContent = student[prop];
        tr.appendChild(td);
    }
    return tr;
}

function insertRow(row)
{
    const table = document.getElementById("table");
    table.appendChild(row)
}


let students = [
    {name:"Mohamed Yassir", username:"mkhalid", age:24, profession: "Programmer"},
    {name:"El Houcine", username:"awixor", age:24, profession: "Fin al7ya"},
    {name:"Oussama", username:"Oussama", age:19, profession: "Wash nta sa7bi"},
]
students = modifyStudents(students);
students.forEach(student => {
    const row = createRow(student);
    insertRow(row);
})
// END NO TOUCH ZONE
