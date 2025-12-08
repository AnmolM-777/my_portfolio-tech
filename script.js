function openWindow(id){
  const w=document.getElementById(id+"-window");
  w.style.display="block";
  w.style.zIndex=Date.now();
}

function closeWindow(id){
  document.getElementById(id+"-window").style.display="none";
}

// TIME
setInterval(()=>{
  const n=new Date();
  document.getElementById("datetime").innerText=n.toDateString()+" "+n.toLocaleTimeString();
},1000)

// LOAD DATA
fetch("data/profile.json").then(r=>r.json()).then(d=>{
  document.getElementById("about-content").innerHTML=
    `<h3>${d.name}</h3><p>${d.role}</p><p>${d.bio}</p><p>${d.location}</p>`;
});

fetch("data/education.json").then(r => r.json()).then(list => {
  document.getElementById("edu-content").innerHTML = list.map(e => `
    <h4>${e.institution}</h4>
    <p><b>${e.degree}</b></p>
    <p>${e.duration}</p>
    <ul>
      ${e.details.map(d => `<li>${d}</li>`).join("")}
    </ul>
    <hr>
  `).join("");
});

fetch("data/skills.json").then(r=>r.json()).then(s=>{
  document.getElementById("skills-content").innerHTML=s.join("<br>");
});

fetch("data/socials.json").then(r=>r.json()).then(s=>{
  document.getElementById("contact-content").innerHTML=
    `<p>Email: ${s.email}</p>`;
  document.getElementById("github-frame").src=s.github;
});
