// ==========================
// WINDOW CONTROL
// ==========================
function openWindow(name) {
  const w = document.getElementById(name + "-window");
  if (w) {
    w.style.display = "block";
    w.style.zIndex = Date.now();
  }
}

function closeWindow(name) {
  const w = document.getElementById(name + "-window");
  if (w) w.style.display = "none";
}

// ==========================
// TIME
// ==========================
setInterval(() => {
  const n = new Date();
  const dt = document.getElementById("datetime");
  if (dt) dt.innerText = n.toDateString() + " " + n.toLocaleTimeString();
}, 1000);

// ==========================
// LOAD DATA
// ==========================
// Optional fetches; if JSON doesn't exist, just skip
fetch("data/profile.json").then(r => r.json()).then(d => {
  const a = document.getElementById("about-content");
  if (a)
    a.innerHTML = `<h3>${d.name}</h3><p>${d.role}</p><p>${d.bio}</p><p>${d.location}</p>`;
}).catch(e => console.log("profile.json not found, using static data"));

fetch("data/education.json").then(r => r.json()).then(list => {
  const edu = document.getElementById("edu-content");
  if (edu)
    edu.innerHTML = list.map(e => `
      <h4>${e.institution}</h4>
      <p><b>${e.degree}</b></p>
      <p>${e.duration}</p>
      <ul>
        ${e.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
      <hr>
    `).join("");
}).catch(e => console.log("education.json not found, using static data"));

fetch("data/skills.json").then(r => r.json()).then(s => {
  const sc = document.getElementById("skills-content");
  if (sc) sc.innerHTML = s.join("<br>");
}).catch(e => console.log("skills.json not found, using static data"));

fetch("data/socials.json").then(r => r.json()).then(s => {
  const c = document.getElementById("contact-content");
  if (c) c.innerHTML = `<p>Email: ${s.email}</p>`;
  const g = document.getElementById("github-frame");
  if (g) g.src = s.github;
}).catch(e => console.log("socials.json not found, using static data"));

// ==========================
// DESKTOP ICON SELECTION
// ==========================
document.querySelectorAll(".desktop-icon").forEach(icon => {
  icon.onclick = () => {
    document.querySelectorAll(".desktop-icon").forEach(i => i.classList.remove("selected"));
    icon.classList.add("selected");
  };
});

// ==========================
// CHATBOT
// ==========================
function openBot() {
  const bot = document.getElementById("bot-window");
  if (bot) {
    bot.style.display = "block";
    botReply("Hi! I'm your assistant \n\nDouble-click an icon to open sections like:\n- About\n- Education\n- Projects\n- Skills\n- Contact\n\nType 'help' to see more.");
  }
}

function closeBot() {
  const bot = document.getElementById("bot-window");
  if (bot) bot.style.display = "none";
}

function sendBot() {
  let input = document.getElementById("botInput");
  if (!input) return;
  let txt = input.value.toLowerCase();
  if (!txt) return;

  addBot("You: " + input.value);
  input.value = "";

  setTimeout(() => respond(txt), 400);
}

function addBot(msg) {
  let chat = document.getElementById("botChat");
  if (!chat) return;
  chat.innerHTML += `<div>${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function botReply(msg) {
  addBot("Bot: " + msg);
}

function respond(txt) {
  if (txt.includes("help"))
    botReply("You can open About, Education, Projects, Skills or Contact.\nTry typing: about, skills, education");

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
    botReply("Hello, How can I help you?");

  else
    botReply("I didn't understand. Try typing 'help'.");
}

// ==========================
// STATIC CONTENT (KEEP ALL YOUR CURRENT DATA)
// ==========================
document.getElementById("about-content").innerHTML = `
<b>Name:</b> Anmol<br><br>
I am a B.Tech Computer Science and Engineering student at IIT Jodhpur (2024–2028).
`;

document.getElementById("edu-content").innerHTML = `
<b>IIT Jodhpur</b><br>
B.Tech Computer Science and Engineering (2024–2028)<br><br>

<b>PACE Junior Science College</b><br>
Class 12: 92.7%<br>
<b>Atomic Energy Central School No. 2</b><br>
Class 10: 97.6%<br>
`;

document.getElementById("skills-content").innerHTML = `
• C / C++<br>
• HTML, CSS, JS<br>
• Git & GitHub<br>
• Python (basic)<br>
• Rust<br>
• ML/DL (PyTorch)<br>
• time-series modeling<br>
• blockchain development fundamentals<br>
• on-chain analytics<br>
• quant modeling<br>
• distributed systems basics<br>
• data engineering<br>
• Linux/Git<br>
• numerical methods and statistical analysis.<br>
• Problem Solving
`;

document.getElementById("contact-content").innerHTML = `
Email: anmolindia2006@gmail.com<br>
LinkedIn: https://www.linkedin.com/in/anmol-mishra-144bab328/<br>
GitHub: github.com/AnmolM-777
`;

// ==========================
// DRAGGING WINDOWS
// ==========================
let dragObj = null, offsetX = 0, offsetY = 0;

function dragStart(e, win) {
  dragObj = win;
  offsetX = e.clientX - win.offsetLeft;
  offsetY = e.clientY - win.offsetTop;
  document.onmousemove = dragMove;
  document.onmouseup = dragEnd;
}

function dragMove(e) {
  if (!dragObj) return;
  dragObj.style.left = (e.clientX - offsetX) + "px";
  dragObj.style.top = (e.clientY - offsetY) + "px";
}

function dragEnd() {
  dragObj = null;
  document.onmousemove = null;
}
