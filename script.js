const skills = [
{name:"Python",days:30},
{name:"OOPS",days:30},
{name:"SQL",days:30},
{name:"Django",days:45},
{name:"DSA",days:60},
{name:"Excel",days:10},
{name:"Power BI",days:30},
{name:"Machine Learning",days:30},
{name:"Deep Learning",days:30},
{name:"NLP",days:40},
{name:"AI",days:30},
{name:"GEN AI",days:30}
];

const container=document.getElementById("skills");

skills.forEach((skill,index)=>{

let progress=localStorage.getItem(skill.name)||0;

let div=document.createElement("div");
div.className="skill";

div.innerHTML=`
<h3>${skill.name} (${skill.days} days)</h3>

<div class="progress">
<div class="bar" id="bar${index}" style="width:${progress}%"></div>
</div>

<button onclick="updateProgress('${skill.name}',${index})">
Done Today
</button>
`;

container.appendChild(div);

});

function updateProgress(name,index){

let progress=localStorage.getItem(name)||0;

progress=parseInt(progress)+3;

if(progress>100) progress=100;

localStorage.setItem(name,progress);

document.getElementById("bar"+index).style.width=progress+"%";

}
