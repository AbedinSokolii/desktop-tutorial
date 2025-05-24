import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MovieDetailsModal from './MovieDetailsModal';
import movieService from './services/movie.service';

function Header({ searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const fetchedMovies = await movieService.getMovies();
      setMovies(fetchedMovies);
      setFilteredMovies(fetchedMovies);
      setLoading(false);
    } catch (err) {
      setError('Failed to load movies');
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = movies.filter(movie => 
        movie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
      setIsSearching(searchQuery.length > 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, movies]);

  if (loading) {
    return (
      <div className="bg-Bg_color min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading movies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-Bg_color min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-Bg_color">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {isSearching 
            ? `Search Results (${filteredMovies.length})`
            : 'Beje zgjedhjen e filmave tjuj'}
        </h2>

        <motion.div 
          layout
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10"
        >
          <AnimatePresence>
            {filteredMovies.map((movie) => (
              <motion.div
                key={movie.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedMovie(movie)}
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  alt={movie.imageAlt}
                  src={movie.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">
                      <span className="absolute inset-0" />
                      {movie.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{movie.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-400">{movie.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredMovies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No movies found matching "{searchQuery}"</p>
          </motion.div>
        )}

        <MovieDetailsModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      </div>
    </div>
  );
}

export default Header;