import React, { useState } from 'react';
import axios from 'axios';

const Header = ({ setMovieList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeoutID, setTimeoutID] = useState(null);

  const fetchData = async (searchString) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=71ea1253`
      );
      setMovieList(response.data.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      if (value) {
        fetchData(value);
      }
    }, 500);
    setTimeoutID(timeout);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                       from-purple-400 to-pink-400">
            Movie Explorer
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-64 px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-500
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       placeholder-gray-400 transition-all duration-300"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" 
                   strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;