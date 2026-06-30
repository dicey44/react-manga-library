import MangaCard from "./components/MangaCard";

function App() {
  const manga = {
    id: 1,
    title: "Berserk",
    imageUrl: "https://placehold.co/200x300",
    author: "Kentaro Miura",
    score: 9.5,
  }

  return (
    <>
      <h1>Manga Library</h1>
      <MangaCard manga={manga} />
    </>
  )
}


export default App;