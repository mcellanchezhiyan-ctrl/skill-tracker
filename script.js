let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let xp = localStorage.getItem("xp") || 0;
let streak = localStorage.getItem("streak") || 0;

document.getElementById("xp").innerText = xp;
document.getElementById("streak").innerText = streak;

function save(){
localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.setItem("xp", xp);
localStorage.setItem("streak", streak);
}

function addTask(){

let topic = document.getElementById("topic").value;
let category = document.getElementById("category").value;
let deadline = document.getElementById("deadline").value;
let priority = document.getElementById("priority").value;
let status = document.getElementById("status").value;

let task = {
topic,
category,
deadline,
priority,
status
};

tasks.push(task);

if(status === "Completed"){
xp = parseInt(xp) + 10;
streak = parseInt(streak) + 1;
}

save();
render();
}

function render(){

let container = document.getElementById("taskList");
container.innerHTML = "";

let completed = 0;

tasks.forEach((t,i)=>{

if(t.status === "Completed") completed++;

container.innerHTML += `
<div class="task">
<h3>${t.topic}</h3>
<p>Category: ${t.category}</p>
<p>Priority: ${t.priority}</p>
<p>Status: ${t.status}</p>
<p>Deadline: ${t.deadline}</p>
</div>
`;
});

let progress = (completed / tasks.length) * 100 || 0;

document.getElementById("progressBar").style.width = progress + "%";

document.getElementById("xp").innerText = xp;
document.getElementById("streak").innerText = streak;

save();
}

render();
