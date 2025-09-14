# Smart News Summarizer

A full-stack web application that delivers concise, AI-powered news summaries.  
Built with **FastAPI (backend)** and **React (frontend)**, it fetches top headlines from NewsAPI, generates short summaries using HuggingFace’s BART model, and displays them with category filters in a clean UI.

---

## ✨ Features
- Fetches top headlines via NewsAPI  
- Summarizes articles into 2–3 lines with NLP  
- Has React frontend with **category** filters  
- Extensible for RSS feed integration  
- Ready for free deployment on Vercel/Render  

---

## 🛠️ Tech Stack
- **Backend:** FastAPI, HuggingFace Transformers, Requests  
- **Frontend:** React, Axios  
- **Deployment:** Vercel (frontend), Render/Heroku (backend)  

---

## 📂 Project Structure
```plaintext
smart_news_summarizer/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
|   ├── public/
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md
```
---

## 🚀 Getting Started
Backend
```
cd backend
python -m venv venv
source venv/bin/activate   # (Linux/Mac)
venv\Scripts\activate      # (Windows)
pip install -r requirements.txt
uvicorn main:app --reload
```
Frontend
```
cd frontend
npm install    # ensure Node.js 18+ is installed
npm start
```
---

## 📄 License
This project is licensed under the [MIT License](./LICENSE).

