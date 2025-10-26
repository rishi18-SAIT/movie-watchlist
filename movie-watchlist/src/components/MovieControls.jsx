import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieControls = ({ movie, type }) => {
  const {
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(MovieContext);

  return (
    <div className="inner-controls">
      {/* For movies in Watchlist */}
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)}>✅ Watched</button>
          <button onClick={() => removeMovieFromWatchlist(movie.id)}>❌ Remove</button>
        </>
      )}

      {/* For movies in Watched */}
      {type === "watched" && (
        <>
          <button onClick={() => moveToWatchlist(movie)}>↩️ Watch Again</button>
          <button onClick={() => removeFromWatched(movie.id)}>❌ Remove</button>
        </>
      )}

      {/* For movies in Search results */}
      {type === "search" && (
        <>
          <button onClick={() => addMovieToWatchlist(movie)}>➕ Add to Watchlist</button>
          <button onClick={() => addMovieToWatched(movie)}>✅ Add to Watched</button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
