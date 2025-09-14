#Smart News Summarizer

A full-stack web application that delivers concise, AI-powered news summaries.
Built with FastAPI (backend) and React (frontend), it fetches top headlines from NewsAPI, generates short summaries using HuggingFace’s BART model, and displays them with region and category filters in a basic UI.

Features
1. Fetches top headlines via NewsAPI
2. Summarizes articles into 2–3 lines with NLP
3. Supports region (country) and category filters
4. React frontend with dropdowns + loading spinner
5. Extensible for RSS feed integration
6. Ready for free deployment on Vercel/Render

Tech Stack
1. Backend: FastAPI, HuggingFace Transformers, Requests
2. Frontend: React, Axios
3. Other: Vercel (frontend deploy), Render/Heroku (backend deploy)

Project Structure
smart_news_summarier\
  backend\
    -main.py
    -requirements.txt
  frontend\
    -src\
    -package.json
  .gitignore
  LICENSE
  README.md

Getting Started
1. cd backend
2. python -m venv venv
3. source venv/bin/activate   # (Linux/Mac)
4. venv\Scripts\activate      # (Windows)
5. pip install -r requirements.txt
6. uvicorn main:app --reload
7. cd frontend
8. npm i (ensure node18 is available, if not install from official site)
9. npm start

License
This project is licensed under the MIT License.


  
