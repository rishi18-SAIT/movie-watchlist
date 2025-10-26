import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import "./Watched.css";

const Watched = () => {
  const { watched } = useContext(MovieContext);

  return (
    <div className="page">
      <h2>Watched Movies ✅</h2>
      {watched && watched.length > 0 ? (
        <div className="movie-grid">
          {watched.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <p className="empty">You haven't marked any movies as watched yet!</p>
      )}
    </div>
  );
};

export default Watched;
