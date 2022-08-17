import { useState, useEffect } from 'react';
import * as moviesApi from '../services/movies-api';
import { STATUS } from 'utilities/status';

export const useFetchTrending = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    moviesApi
      .fetchTrending()
      .then(data => {
        const movies = data.results;
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATUS.REJECTED);
      });
  }, []);

  return { movies, status };
};
