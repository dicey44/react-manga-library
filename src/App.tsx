import { useEffect, useState } from "react";
import MangaCard from "./components/MangaCard";
import { searchManga } from "./services/mangaApi";
import type { Manga } from "./types/manga";


function App() {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadManga() {
      const results = await searchManga("naruto");
      setMangaList(results);
      setIsLoading(false);
    }

    loadManga();
  }, []);


  return (
    <>
      <h1>Manga Library</h1>

      {isLoading && <p>Loading manga...</p>}

      {mangaList.map(manga => (
        <MangaCard
          key={manga.id}
          manga={manga}
        />
      ))}
    </>
  )
}


export default App;