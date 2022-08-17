import { useState, useEffect } from 'react';
import * as moviesApi from '../services/movies-api';
import { STATUS } from 'utilities/status';
export const useFetchMoviesBySearch = query => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus(STATUS.PENDING);
    moviesApi
      .fetchMoviesBySearch({ query })
      .then(data => {
        setMovies(data.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATUS.REJECTED);
      });
  }, [query]);
  return { status, movies };
};
