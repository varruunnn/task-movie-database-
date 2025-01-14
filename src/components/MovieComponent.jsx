import React from 'react';

const MovieComponent = ({ movie, onMovieSelect }) => {
  return (
    <div 
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden
                 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                 cursor-pointer group"
      onClick={() => onMovieSelect(movie.imdbID)}
    >
      <div className="relative pb-[140%]">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
          alt={movie.Title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300
                   group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex items-end p-4">
          <p className="text-white font-semibold text-lg transform translate-y-4
                     group-hover:translate-y-0 transition-transform duration-300">
            {movie.Title}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg truncate">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieComponent;