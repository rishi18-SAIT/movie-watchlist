// src/utils/api.js
export const fetchMovies = async (searchTerm) => {
  const API_KEY = "1d70ff23"; // your OMDb API key
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True" && data.Search) {
      return data.Search; // array of movie objects
    } else {
      console.warn("No movies found or invalid response:", data.Error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
