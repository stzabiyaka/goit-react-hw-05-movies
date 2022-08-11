import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { STATE } from 'utilities/state';
import * as moviesApi from '../../services/movies-api';
import { MovieDetailsCard } from 'components/MovieDetailsCard';
import { AdditionalInfo, Link, AdditionalInfoDisplay } from '.';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATE.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATE.PENDING);
    moviesApi
      .fetchMovieById({ movieId })
      .then(data => {
        setMovieDetails(data);
        setStatus(STATE.RESOLVED);
      })
      .catch(({ message }) => {
        console.log(message);
        setStatus(STATE.REJECTED);
      });
  }, [movieId]);

  return (
    <article>
      {status === STATE.PENDING && <Notification message="Loading..." />}
      {status === STATE.RESOLVED && (
        <>
          <Section>
            <MovieDetailsCard
              title={movieDetails.original_title}
              posterPath={movieDetails.poster_path}
              releaseDate={movieDetails.release_date.slice(0, 4)}
              overview={movieDetails.overview}
              genres={movieDetails.genres.map(genre => genre.name).join(' ')}
            />
          </Section>
          <Section sectionTitle="Additional information">
            <AdditionalInfo>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <AdditionalInfoDisplay>
                <Outlet />
              </AdditionalInfoDisplay>
            </AdditionalInfo>
          </Section>
        </>
      )}
      {status === STATE.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </article>
  );
};
