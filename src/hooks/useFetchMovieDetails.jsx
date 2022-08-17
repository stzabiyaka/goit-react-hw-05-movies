import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../services/movies-api';
import { STATUS } from 'utilities/status';

export const useFetchMovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    moviesApi
      .fetchMovieById({ movieId })
      .then(data => {
        setMovieDetails(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

  return { movieDetails, status };
};
