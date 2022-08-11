import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import { STATE } from 'utilities/state';
import { Notification } from 'components/Notification';
import { ReviewsList } from 'components/ReviewsList';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATE.IDLE);

  useEffect(() => {
    setStatus(STATE.PENDING);
    moviesApi
      .fetchMovieReviews({ movieId })
      .then(data => {
        if (data.results.length !== 0) {
          setReviews(data.results);
        }
        setStatus(STATE.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATE.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === STATE.PENDING && <Notification message="Loading..." />}
      {status === STATE.RESOLVED && reviews ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <Notification message="We don't have any reviews fot this movie." />
      )}
      {status === STATE.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};
