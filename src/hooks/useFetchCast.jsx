import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../services/movies-api';
import { STATUS } from 'utilities/status';

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    moviesApi
      .fetchMovieCredits({ movieId })
      .then(data => {
        setCast(data.cast);
        setStatus(STATUS.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);
  return { status, cast };
};
