import * as moviesApi from '../../services/movies-api';
import { PageTitle } from 'components/PageTitle';
import { MoviesGallery } from 'components/MoviesGallery';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { STATE } from 'utilities/state';

export const Home = () => {
  const [status, setStatus] = useState(STATE.IDLE);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus(STATE.PENDING);
    moviesApi
      .fetchTrending()
      .then(data => {
        const movies = data.results;
        setMovies(movies);
        setStatus(STATE.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATE.REJECTED);
      });
  }, []);

  return (
    <>
      <PageTitle pageTitle="Tranding Today" />
      {status === STATE.PENDING && <Notification message="Loading..." />}
      {status === STATE.RESOLVED && (
        <Section>
          <MoviesGallery movies={movies} />
        </Section>
      )}
      {status === STATE.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};
