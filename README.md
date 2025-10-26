# movie-watchlist🎬

A React.js web application to manage your movie watchlist and track movies you've watched. This app allows you to search movies via the OMDb API, add them to your watchlist, mark them as watched, and manage your movie collection with a modern, responsive UI.

Live Demo: https://rishikesh-movie-watchlist.netlify.app

🧩 Features

Search Movies: Search for any movie using the OMDb API.

Watchlist Management: Add movies to your watchlist for future viewing.

Mark as Watched: Move movies from your watchlist to watched list.

Remove Movies: Remove movies from watchlist or watched list.

Persistent Storage: All data is stored in LocalStorage, so your watchlist and watched movies persist across page reloads.

Responsive Design: Works perfectly on desktop and mobile devices.

Attractive UI: Modern, glassmorphic cards with hover animations.

🛠️ Technologies Used

Frontend: React.js, Context API, Hooks

API: OMDb API

State Management: React Context + useReducer

Persistence: LocalStorage

Styling: CSS (Flexbox & Grid for layout, hover effects)

🚀 Getting Started

Prerequisites

Node.js installed on your machine

A code editor (VS Code recommended)

Installation

Clone the repository:

git clone https://github.com/rishi18-SAIT/movie-watchlist.git


Navigate to the project folder:

cd movie-watchlist


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser.

🔗 API Key

The app uses OMDb API to fetch movie details.

Replace the API key in src/utils/api.js if needed:

const API_KEY = "YOUR_OMDB_API_KEY";

👨‍💻 Author

Rishikesh Ranjan

GitHub: https://github.com/rishi18-SAIT

LinkedIn: https://www.linkedin.com/in/rishikesh-ranjan-405baa2ba

Email: rishikesh9098@gmail.com
