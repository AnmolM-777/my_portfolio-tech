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
document.querySelectorAll(".desktop-icon").forEach(icon => {
  icon.onclick = () => {
    document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
    icon.classList.add("selected");
  };
});

function openBot() {
  document.getElementById("botWindow").style.display = "block";
  botReply("Hi! I'm your assistant 🤖\n\nDouble-click an icon to open sections like:\n- About\n- Education\n- Projects\n- Skills\n- Contact\n\nType 'help' to see more.");
}

function closeBot() {
  document.getElementById("botWindow").style.display = "none";
}

function sendBot() {
  let input = document.getElementById("botInput");
  let txt = input.value.toLowerCase();
  if (!txt) return;

  addBot("You: " + input.value);
  input.value = "";

  setTimeout(() => respond(txt), 400);
}

function addBot(msg) {
  let chat = document.getElementById("botChat");
  chat.innerHTML += `<div>${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function botReply(msg) {
  addBot("Bot: " + msg);
}

function respond(txt) {
  if (txt.includes("help"))
    botReply("You can open About, Education, Projects, Skills or Contact." +
             "\nTry typing: about, skills, education");

  else if (txt.includes("about"))
    botReply("Click the About icon to see who I am.");

  else if (txt.includes("education"))
    botReply("Open Education to view my academic history.");

  else if (txt.includes("projects"))
    botReply("Click Projects to see my work and GitHub profile.");

  else if (txt.includes("skills"))
    botReply("Open Skills to see what technologies I use.");

  else if (txt.includes("contact"))
    botReply("Use Contact to reach me by email, LinkedIn or GitHub.");

  else if (txt.includes("who"))
    botReply("I'm a Windows-style assistant for this portfolio.");

  else if (txt.includes("hi") || txt.includes("hello"))
    botReply("Hello 🙂 How can I help you?");

  else
    botReply("I didn't understand. Try typing 'help'.");
}
document.getElementById("about-content").innerHTML = `
<b>Name:</b> Anmol<br><br>
I am a B.Tech Electrical Engineering student at IIT Jodhpur (2024–2028).
`;

document.getElementById("edu-content").innerHTML = `
<b>IIT Jodhpur</b><br>
B.Tech Electrical Engineering (2024–2028)<br><br>

<b>Krishna Public School</b><br>
Class 12: 95.4%<br>
Class 10: 94.3%
`;

document.getElementById("skills-content").innerHTML = `
• C / C++<br>
• HTML, CSS, JS<br>
• Git & GitHub<br>
• Python (basic)<br>
• Problem Solving
`;

document.getElementById("contact-content").innerHTML = `
Email: your@email.com<br>
LinkedIn: linkedin.com/in/yourname<br>
GitHub: github.com/AnmolM-777
`;



