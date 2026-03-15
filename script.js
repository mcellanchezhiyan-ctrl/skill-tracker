const defaultTasks = [
{topic:"Python Basics",category:"Python",priority:"High"},
{topic:"OOP Concepts",category:"Python",priority:"High"},
{topic:"SQL Fundamentals",category:"Database",priority:"High"},
{topic:"Django Framework",category:"Web",priority:"Medium"},
{topic:"Data Structures",category:"DSA",priority:"High"},
{topic:"Excel Analytics",category:"Tools",priority:"Low"},
{topic:"Power BI",category:"Tools",priority:"Medium"},
{topic:"Machine Learning",category:"AI",priority:"High"},
{topic:"Deep Learning",category:"AI",priority:"Medium"},
{topic:"NLP",category:"AI",priority:"Medium"},
{topic:"Generative AI",category:"AI",priority:"High"}
];

let tasks = JSON.parse(localStorage.getItem("tasks"));

if(!tasks){
tasks = defaultTasks.map(t => ({...t, done:false}));
localStorage.setItem("tasks",JSON.stringify(tasks));
}

const container = document.getElementById("taskContainer");

function render(){

container.innerHTML="";

let completed = 0;

tasks.forEach((task,index)=>{

if(task.done) completed++;

const div = document.createElement("div");

div.className="task";

div.innerHTML=`
<div>
<b>${task.topic}</b><br>
<small>${task.category}</small><br>
<span class="priority-${task.priority.toLowerCase()}">${task.priority}</span>
</div>

<input type="checkbox" ${task.done ? "checked":""}
onclick="toggleTask(${index})">
`;

container.appendChild(div);

});

updateProgress(completed);
}

function toggleTask(index){

tasks[index].done = !tasks[index].done;

localStorage.setItem("tasks",JSON.stringify(tasks));

render();
}

function updateProgress(completed){

const percent = Math.round((completed/tasks.length)*100);

document.getElementById("progressFill").style.width = percent + "%";

document.getElementById("progressText").innerText =
completed + " / " + tasks.length + " Completed";

updateChart(completed);
}

let chart;

function updateChart(completed){

const data = {
labels:["Completed","Remaining"],
datasets:[{
data:[completed,tasks.length-completed],
backgroundColor:["#22c55e","#ef4444"]
}]
};

if(chart){
chart.destroy();
}

chart = new Chart(
document.getElementById("progressChart"),
{
type:"doughnut",
data:data
}
);
}

render();
