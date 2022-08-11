import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import { STATE } from 'utilities/state';
import { Notification } from 'components/Notification';
import { CastGallery } from 'components/CastGallery';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATE.IDLE);

  useEffect(() => {
    setStatus(STATE.PENDING);
    moviesApi
      .fetchMovieCredits({ movieId })
      .then(data => {
        setCast(data.cast);
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
      {status === STATE.RESOLVED && <CastGallery cast={cast} />}
      {status === STATE.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};
