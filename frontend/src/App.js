import React, { useEffect, useState } from "react";
import axios from "axios";

const categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "technology"];

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);

const fetchData = () => {
  setLoading(true); // start loading
  axios.get(`http://127.0.0.1:8000/get_summaries?country=us&category=${category}`)
    .then(res => setArticles(res.data.articles))
    .catch(err => console.error(err))
    .finally(() => setLoading(false)); // stop loading
};


  useEffect(() => { fetchData(); }, [category]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🌍 Smart News Summarizer</h1>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginLeft: "10px" }}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <button onClick={fetchData} style={{ marginLeft: "10px" }}>Refresh</button>
      </div>

      {/* Articles */}
      {loading ? (
        <p>Loading news...</p>
      ) : (
        articles.map((art, idx) => (
          <div key={idx} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "10px"
          }}>
            <h2>{art.title}</h2>
            <p>{art.summary}</p>
            <a href={art.url} target="_blank" rel="noreferrer">Read More</a>
          </div>
        ))
      )}

    </div>
  );
}

export default App;
