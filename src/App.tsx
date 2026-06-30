import { useEffect, useState } from "react";
import MangaCard from "./components/MangaCard";
import { searchManga } from "./services/mangaApi";
import type { Manga } from "./types/manga";
import "./App.css";


function App() {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadManga() {
      const results = await searchManga("");
      setMangaList(results);
      setIsLoading(false);
    }

    loadManga();
  }, []);

  async function handleSearch() {
    try {
      setIsLoading(true);
      setError("");

      const results = await searchManga(query);

      setMangaList(results);
    } catch (error) {
      setError("Failed to load manga. Try again.");
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <div className="app">
      <h1>Manga Library</h1>
      <input type="text" placeholder="Search manga..." value={query} onChange={(e) => setQuery(e.target.value)} />

      <button onClick={handleSearch}>
        Search
      </button>

      {isLoading && <p>Loading manga...</p>}
      {error && <p>{error}</p>}

      <div className="manga-grid">
        {mangaList.map(manga => (
          <MangaCard
            key={manga.id}
            manga={manga}
          />
        ))}
      </div>
      
    </div>
  )
}


export default App;