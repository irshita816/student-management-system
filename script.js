let students = JSON.parse(localStorage.getItem("students")) || [];

const table = document.getElementById("studentTable");
const count = document.getElementById("count");

displayStudents();

document.getElementById("addBtn").onclick = addStudent;

document.getElementById("sortBtn").onclick = sortStudents;

document.getElementById("clearBtn").onclick = clearStudents;

document.getElementById("search").addEventListener("keyup",searchStudent);

function addStudent(){

let name=document.getElementById("name").value.trim();
let age=document.getElementById("age").value;
let course=document.getElementById("course").value.trim();

if(name==""||age==""||course==""){
alert("Fill all fields");
return;
}

students.push({
name,
age,
course
});

saveData();

displayStudents();

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("course").value="";

}

function displayStudents(list=students){

table.innerHTML="";

list.forEach((student,index)=>{

table.innerHTML+=`

<tr>

<td>${student.name}</td>

<td>${student.age}</td>

<td>${student.course}</td>

<td>

<button onclick="deleteStudent(${index})">

Delete

</button>

</td>

</tr>

`;

});

count.innerHTML=list.length;

}

function deleteStudent(index){

students.splice(index,1);

saveData();

displayStudents();

}

function sortStudents(){

students.sort((a,b)=>a.name.localeCompare(b.name));

saveData();

displayStudents();

}

function searchStudent(){

let keyword=this.value.toLowerCase();

let filtered=students.filter(student=>

student.name.toLowerCase().includes(keyword)

);

displayStudents(filtered);

}

function clearStudents(){

if(confirm("Delete all students?")){

students=[];

saveData();

displayStudents();

}

}

function saveData(){

localStorage.setItem("students",JSON.stringify(students));

}
