import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import Section from 'components/Section';
import Notification from 'components/Notification';
import MovieDetailsArticle from 'components/MovieDetailsArticle';
import {
  AdditionalInfo,
  InfoLink,
  AdditionalInfoDisplay,
  Arrow,
  BackLink,
} from '.';
import { STATUS } from 'utilities/status';

const MovieDetails = () => {
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  const { movieDetails, status } = useFetchMovieDetails();
  return (
    <>
      <BackLink to={backHref.current}>
        <Arrow />
        Go Back
      </BackLink>
      {status === STATUS.RESOLVED && (
        <>
          <article>
            <Section>
              <MovieDetailsArticle
                title={movieDetails.original_title}
                posterPath={movieDetails.poster_path}
                releaseDate={movieDetails.release_date.slice(0, 4)}
                userScore={movieDetails.vote_average}
                overview={movieDetails.overview}
                genres={movieDetails.genres.map(genre => genre.name).join(' ')}
              />
            </Section>
            <Section sectionTitle="Additional information">
              <AdditionalInfo>
                <ul>
                  <li>
                    <InfoLink to="cast">Cast</InfoLink>
                  </li>
                  <li>
                    <InfoLink to="reviews">Reviews</InfoLink>
                  </li>
                </ul>
                <AdditionalInfoDisplay>
                  <Outlet />
                </AdditionalInfoDisplay>
              </AdditionalInfo>
            </Section>
          </article>
        </>
      )}
      {status === STATUS.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};

export default MovieDetails;
