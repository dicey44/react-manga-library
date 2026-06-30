import type { Manga } from "../types/manga";

const API_URL = "https://api.jikan.moe/v4";

export async function searchManga(query: string): Promise<Manga[]> {

    const response = await fetch(
        `${API_URL}/manga?q=${query}`
    );

    const data = await response.json();

    return data.data.map((item: any ) => (
        {
            id: item.mal_id,
            title: item.title,
            imageUrl: item.images.jpg.image_url,
            author: item.authors[0]?.name ?? "Unknown",
            score: item.score,
        }
    ))
}