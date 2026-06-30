import type { Manga } from "../types/manga";

interface MangaCardProps {
    manga: Manga;
}

function MangaCard({ manga }: MangaCardProps) {
    return (
        <div>
            <img 
                src={manga.imageUrl}
                alt={manga.title}
            />

            <h2>{manga.title}</h2>
            <p>{manga.author}</p>
            <p>Score: {manga.score ?? "N/A"}</p>
        </div>
    )
}

export default MangaCard;