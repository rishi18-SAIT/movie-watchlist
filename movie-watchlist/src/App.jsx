import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Header from './components/Header';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import AddMovie from './components/AddMovie';
import './App.css';


const App = () => {
return (
<MovieProvider>
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/watchlist" element={<Watchlist />} />
<Route path="/watched" element={<Watched />} />
<Route path="/add" element={<AddMovie />} />
</Routes>
</BrowserRouter>
</MovieProvider>
);
};


export default App;