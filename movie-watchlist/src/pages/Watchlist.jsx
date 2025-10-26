import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import "./Watchlist.css";

const Watchlist = () => {
  const { watchlist } = useContext(MovieContext);

  return (
    <div className="page">
      <h2>Your Watchlist 🎥</h2>
      {watchlist && watchlist.length > 0 ? (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <p className="empty">No movies in your watchlist. Add some!</p>
      )}
    </div>
  );
};

export default Watchlist;
