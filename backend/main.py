from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests
from transformers import pipeline

app = FastAPI()

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

NEWS_API_KEY = "790417ae09da455891fbac8d31264cd1"
BASE_URL = "https://newsapi.org/v2/top-headlines"



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get_summaries")
def get_summaries(
    country: str = Query("us"),
    category: str = Query(None)
):
    params = {
        "apiKey": NEWS_API_KEY,
        "country": country,
        "pageSize": 5
    }
    if category:
        params["category"] = category

    res = requests.get(BASE_URL, params=params)
    articles = res.json().get("articles", [])

    summaries = []
    for art in articles:
        text = art.get("content") or art.get("description") or ""
        if not text:
            continue
        try:
            summary = summarizer(text, max_length=60, min_length=25, do_sample=False)[0]["summary_text"]
        except Exception:
            summary = "Summary not available."
        summaries.append({
            "title": art.get("title"),
            "url": art.get("url"),
            "summary": summary
        })

    return {"articles": summaries}