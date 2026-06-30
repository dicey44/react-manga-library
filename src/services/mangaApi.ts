const API_URL = "https://api.jikan.moe/v4";

export async function searchManga(query: string) {
    const response = await fetch(
        `${API_URL}/manga?q=${query}`
    );

    const data = await response.json();

    return data;
}