# 🪟 My Portfolio — A Retro Windows-Style Portfolio

Welcome to **Anmol's Portfolio**, a fully interactive Windows-95-inspired portfolio website.  
It simulates a classic desktop environment with draggable windows, icons, a taskbar,  
and a built-in assistant — creating a fun and nostalgic way to explore who I am.

👉 **Live Site:** https://my-portfolio-tech-eight.vercel.app/  
👉 **Tech Stack:** Pure HTML, CSS, JavaScript (no frameworks)

---

## ✨ Features

- 🖥 **Authentic Windows-95 desktop UI**  
  Draggable windows, taskbar, icons, popups — all recreated manually.

- 📁 **Interactive portfolio windows**  
  Double-click system icons to open:
  - About  
  - Education  
  - Projects  
  - Skills  
  - Contact  

- 🤖 **Built-in Assistant**  
  A chatbot-style window that responds to typed commands like:
  - `about`
  - `education`
  - `skills`
  - `contact`
  - `help`

- 🎨 **Pixel-perfect icon system** with retro styling  
- 📦 **Lightweight static website** — deploys instantly on Vercel  
- 🎉 **Welcome popup** when the site loads  

---

## 🗂 Project Structure
project-root/
│
├── index.html # Main UI + windows + desktop
├── style.css # Windows theme styling
├── script.js # Window logic, assistant, popup
│
├── assets/
│ ├── icons/ # All Windows-style icons
│ ├── screenshots/ # Add your own screenshots
│ └── ...
│
├── README.md
└── vercel.json # Optional — for static deployment config

---

## ⚙️ Setup Instructions (Local Development)
1️⃣ Clone the repository
git clone https://github.com/AnmolM-777/my_portfolio-tech.git
cd my_portfolio-tech

2️⃣ Run locally
Option A — open index.html directly in a browser.
Option B — recommended (local server):
# Python 3
python3 -m http.server
Then visit:
http://localhost:8000

🚀 Deploying on Vercel
1️⃣ Install Vercel CLI
npm i -g vercel
2️⃣ Deploy
vercel
3️⃣ Production deploy
vercel --prod

GitHub Auto Deploy
If you connect your repo to Vercel:
Every push to main redeploys automatically
PRs generate preview deployments

🛠 Customization
🎨 Change Icons
Replace files in:
assets/icons/

📝 Edit Window Content
Inside index.html, modify:
#about-window
#education-window
#skills-window
#projects-window
#contact-window

🤖 Customize Assistant Responses
Modify the chatbot logic in:
script.js → sendBot()

💬 Change Welcome Popup Message
Located in:
#welcome-window

🧰 Tech Stack
Frontend: HTML5, CSS3, JavaScript
Design: Retro Windows-95 theming
Deployment: Vercel
Dependencies: None — zero frameworks

👤 Author

Anmol Mishra
📧 Email: anmolindia2006@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/anmol-mishra-144bab328/
💻 GitHub: https://github.com/AnmolM-777
