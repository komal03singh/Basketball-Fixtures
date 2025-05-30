🏀 Basketball Fixtures
A responsive web app that displays upcoming basketball events, including team logos, match details, and dates. Built with React, Vite, and Tailwind CSS, and powered by a Node.js + Express backend fetching data from an external sports API.

🚀 Live Demo
Frontend: https://basketball-fixtures-qknx.vercel.app
Backend: https://basketball-fixtures.onrender.com

🛠 Tech Stack
Frontend: React + Vite + Tailwind CSS

Backend: Node.js + Express

API: AllSportsAPI (for basketball fixtures)

Deployment: Vercel (Frontend), Render (Backend)

📦 Features
Fetches upcoming basketball fixtures from a sports API

Displays team logos, matchups, and timings

Responsive layout using Tailwind CSS


📁 Folder Structure

.
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── App.jsx
│   │   └── ...
│   ├── .env
│   └── vite.config.js
└── backend
    ├── server.js
    ├── .env
    └── ...
🔧 Local Setup
Clone the repository:

bash

git clone https://github.com/komal03singh/Basketball-Fixtures.git
cd Basketball-Fixtures
Install dependencies:

Frontend:

cd frontend
npm install
Backend:


cd ../backend
npm install
Add .env files

bash
Copy
Edit
cd ../frontend
npm run dev
📸 Screenshots


📌 Notes
Make sure your backend allows CORS for frontend domains.

For production, frontend and backend are hosted on different platforms (Vercel & Render).

🧑‍💻 Author
Komal

