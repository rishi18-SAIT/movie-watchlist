import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

// Initial state (load from localStorage if available)
const initialState = loadFromLocalStorage() || {
  watchlist: [],
  watched: [],
};

// Create Context
export const MovieContext = createContext(initialState);

// Provider Component
export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);

  // Actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
