let totalTasks=0
let completed=0

fetch("data/tasks.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("topics")

data.topics.forEach(topic=>{

let div=document.createElement("div")
div.className="topic"

let title=document.createElement("h2")
title.innerText=topic.title

div.appendChild(title)

topic.tasks.forEach(task=>{

totalTasks++

let label=document.createElement("label")
label.className="task"

let checkbox=document.createElement("input")
checkbox.type="checkbox"

checkbox.addEventListener("change",()=>{

if(checkbox.checked) completed++
else completed--

updateProgress()

})

label.appendChild(checkbox)
label.append(" "+task)

div.appendChild(label)
div.appendChild(document.createElement("br"))

})

container.appendChild(div)

})

})

function updateProgress(){

let percent=(completed/totalTasks)*100

document.getElementById("progress").style.width=percent+"%"

}
