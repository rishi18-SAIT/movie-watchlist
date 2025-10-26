import React, { useState } from "react";
import { fetchMovies } from "../utils/api";
import MovieCard from "./MovieCard";
import "./AddMovie.css";

const AddMovie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const movies = await fetchMovies(searchTerm);
      setResults(
        movies.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster !== "N/A" ? movie.Poster : null,
        }))
      );
    } catch (error) {
      console.error("Error fetching movies:", error);
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Form Card */}
      <div className="add-movie">
        <h2>Add a Movie</h2>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading && (
          <p style={{ color: "#38bdf8", marginTop: "1rem", textAlign: "center" }}>
            Loading...
          </p>
        )}
      </div>

      {/* Movie Results */}
      {results.length > 0 && (
        <div className="movie-grid-container">
          <div className="movie-grid">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="search" />
            ))}
          </div>
        </div>
      )}

      {/* No movies found */}
      {!loading && results.length === 0 && searchTerm.trim() !== "" && (
        <p style={{ marginTop: "1rem", textAlign: "center", color: "#f87171" }}>
          No movies found for "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default AddMovie;
