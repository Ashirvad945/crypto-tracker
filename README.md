# 🚀 Crypto Tracker

A full‑stack MERN crypto tracking web app that shows top coins, live prices, historical charts, and stores data to MongoDB.

---

## 🛠 Tech Stack

- **Frontend:** React 19, Vite, React Router, React Google Charts, CSS
- **Backend:** Node.js, Express.js, Axios, dotenv, node-cron
- **Database:** MongoDB Atlas (cloud NoSQL)
- **External API:** CoinGecko API (crypto market data)
- **Deployment:** Render.com

---

## ✨ Features

- View top 100 crypto coins with price, market cap, and 24h change
- Search coins by name (instant search)
- View single coin details & live historical price chart (last 10 days)
- Data stored in MongoDB:
  - Current data: latest snapshot (overwrite every sync)
  - History data: saved hourly via cron job
- Fully responsive & clean UI

---

## 📂 Project Structure

```bash
crypto-tracker/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── services/
│       ├── App.js
│       └── index.js
├── server/                 # Node.js backend
│   ├── models/             # Mongoose models
│   │   ├── currentDataModel.js
│   │   └── historyDataModel.js
│   ├── routes/             # Express routes
│   ├── controllers/        # API logic
│   ├── cron/               # Cron jobs (save history)
│   ├── server.js           # App entry point
│   └── package.json
└── README.md




Clone repository:
git clone https://github.com/yourusername/crypto-tracker.git
cd crypto-tracker

Setup Backend:
cd server
npm install

Create .env file in /server:
MONGO_URI=your_mongodb_connection_string

Run backend:
npm run dev

Setup Frontend:
cd ../client
npm install
npm run dev


| Method | Endpoint                                 | Description               |
| ------ | ---------------------------------------- | ------------------------- |
| GET    | /api/coins                               | Fetch & save top coins    |
| GET    | /api/coins/\:coinId                      | Get single coin data      |
| GET    | /api/coins/\:coinId/history?currency=usd | Get historical price data |


Deployment
Deployed on Render:

Backend (Node.js) : https://crypto-tracker-server-tn0y.onrender.com

Frontend (static build) : your Render static site URL


---
