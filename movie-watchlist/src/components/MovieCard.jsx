import React from "react";
import MovieControls from "./MovieControls";
import "./MovieCard.css"; // optional CSS file for styling

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      {/* Movie Poster */}
      <div className="poster">
        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} />
        ) : (
          <div className="poster-placeholder">No Image</div>
        )}
      </div>

      {/* Movie Info */}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>

      {/* Controls (Add/Remove/Watched) */}
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
