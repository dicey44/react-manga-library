import type { Manga } from "../types/manga";
import "./MangaCard.css";

interface MangaCardProps {
    manga: Manga;
}

function MangaCard({ manga }: MangaCardProps) {
    return (
        <div className="manga-card">
            <img 
                src={manga.imageUrl}
                alt={manga.title}
            />
            <div className="manga-card-content">
                <h2>{manga.title}</h2>
                <p>{manga.author}</p>
                <p>Score: {manga.score ?? "N/A"}</p>
            </div>
            
        </div>
    )
}

export default MangaCard;