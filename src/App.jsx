import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieComponent from './components/MovieComponent';
import MovieInfo from './components/MovieInfo';

const POPULAR_MOVIES = [
  "Batman", "Iron Man", "Spider-Man", "Avatar",
  "Matrix", "Inception", "Interstellar", "Titanic",
  "Star Wars", "Lord of the Rings", "Harry Potter", "Jurassic Park",
  "The Godfather", "Pulp Fiction", "Fight Club", "Forrest Gump"
];

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial random movies
    const loadRandomMovies = async () => {
      const randomMovie = POPULAR_MOVIES[Math.floor(Math.random() * POPULAR_MOVIES.length)];
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${randomMovie}&apikey=71ea1253`
        );
        setMovieList(response.data.Search || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching initial movies:", error);
        setLoading(false);
      }
    };
    loadRandomMovies();
  }, []);

  const onMovieSelect = async (imdbID) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=71ea1253`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
    setLoading(false);
  };

  const handleSearch = (movies) => {
    setMovieList(movies);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header setMovieList={handleSearch} />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : selectedMovie ? (
        <div className="p-4">
          <button
            onClick={() => setSelectedMovie(null)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg
                     transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Back to Search Results
          </button>
          <MovieInfo movie={selectedMovie} />
        </div>
      ) : (
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movieList?.length ? (
              movieList.map((movie) => (
                <MovieComponent
                  key={movie.imdbID}
                  movie={movie}
                  onMovieSelect={onMovieSelect}
                />
              ))
            ) : (
              <p className="text-white text-xl col-span-full text-center">
                Enter a movie name to search
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
