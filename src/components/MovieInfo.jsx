import React from 'react';

const MovieInfo = ({ movie }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-gray-800 to-gray-900 
                    rounded-xl overflow-hidden shadow-2xl">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
            alt={movie.Title}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-4">{movie.Title}</h2>
          <div className="space-y-4">
            <p className="text-gray-300"><span className="font-semibold text-purple-400">Year:</span> {movie.Year}</p>
            <p className="text-gray-300"><span className="font-semibold text-purple-400">Runtime:</span> {movie.Runtime}</p>
            <p className="text-gray-300"><span className="font-semibold text-purple-400">Genre:</span> {movie.Genre}</p>
            <p className="text-gray-300"><span className="font-semibold text-purple-400">Director:</span> {movie.Director}</p>
            <p className="text-gray-300"><span className="font-semibold text-purple-400">Cast:</span> {movie.Actors}</p>
            <p className="text-gray-300"><span className="font-semibold text-purple-400">Plot:</span> {movie.Plot}</p>
            {movie.Ratings?.map((rating, index) => (
              <p key={index} className="text-gray-300">
                <span className="font-semibold text-purple-400">{rating.Source}:</span> {rating.Value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;