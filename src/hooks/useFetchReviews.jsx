import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../services/movies-api';
import { STATUS } from 'utilities/status';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    moviesApi
      .fetchMovieReviews({ movieId })
      .then(data => {
        if (data.results.length !== 0) {
          setReviews(data.results);
        }
        setStatus(STATUS.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

  return { reviews, status };
};
