import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
return (
<div className="home">
<h1>Welcome to Movie Watchlist App  🎬</h1>
<p>Track movies you want to watch and the ones you've already seen.</p>
<div className="home-links">
<Link to="/watchlist" className="btn">Go to Watchlist</Link>
<Link to="/watched" className="btn">View Watched</Link>
<Link to="/add" className="btn add">+ Add Movie</Link>
</div>
</div>
);
};


export default Home;