# movie-watchlist🎬

🎬 Movie-Watchlist App

A modern React.js web app to manage your movie watchlist and track watched movies. Search for movies using the OMDb API, add them to your watchlist, mark them as watched, and enjoy a sleek, responsive UI.

💻 Live Demo: rishikesh-movie-watchlist.netlify.app

🧩 Features

🔍 Search Movies: Find any movie using the OMDb API

📃 Watchlist Management: Add movies to watch later

✅ Mark as Watched: Move movies from watchlist to watched

❌ Remove Movies: Remove from watchlist or watched list

💾 Persistent Storage: Data saved in LocalStorage

📱 Responsive Design: Works on desktop & mobile

✨ Modern UI: Glassmorphic cards with hover effects

🛠️ Tech Stack

Frontend: React.js, Context API, Hooks

API: OMDb API

State Management: React Context + useReducer

Persistence: LocalStorage

Styling: CSS Flexbox & Grid, hover animations

📂 Folder Structure
Folder / File	Description
src/	Main source folder containing all React code
src/components/	Reusable React components
src/components/MovieCard.jsx	Card for each movie
src/components/AddMovie.jsx	Search and add movies
src/components/MovieControls.jsx	Add/Remove/Move buttons
src/context/	React Context for global state
src/context/MovieContext.jsx	Context + reducer for watchlist/watched
src/pages/	Page components for routing
src/pages/Home.jsx	Homepage showing movies
src/pages/Watchlist.jsx	Watchlist page
src/pages/Watched.jsx	Watched movies page
src/utils/	Helper functions
src/utils/api.js	OMDb API fetch functions
src/utils/localStorage.js	Save/load data in LocalStorage
src/App.jsx	Main app with routing
src/index.js	Entry point
src/App.css	Global styles
🚀 Getting Started
Prerequisites

Node.js installed

Code editor (VS Code recommended)

Installation
# Clone repo
git clone https://github.com/rishi18-SAIT/movie-watchlist.git

# Go into folder
cd movie-watchlist

# Install dependencies
npm install

# Run app
npm start


Open http://localhost:3000
 in your browser.

🔗 API Key

The app uses OMDb API. Replace the API key in src/utils/api.js if needed:

const API_KEY = "YOUR_OMDB_API_KEY";

👨‍💻 Author

Rishikesh Ranjan

GitHub: rishi18-SAIT

LinkedIn: Rishikesh Ranjan

Email: rishikesh9098@gmail.com

✅ Enjoy tracking your movies in style!
