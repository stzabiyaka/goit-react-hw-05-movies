import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NoImage } from 'utilities/NoImage.styled';
import { Poster, Title, MovieLink } from './MovieCard.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MovieCard = ({ title, posterPath, movieId }) => {
  const location = useLocation();
  return (
    <li>
      <MovieLink to={`/movies/${movieId}`} state={{ from: location }}>
        <article>
          {posterPath ? (
            <Poster src={`${BASE_URL}${posterPath}`} alt={`${title} poster`} />
          ) : (
            <NoImage>Sorry, no poster available :(</NoImage>
          )}
          <Title>{title}</Title>
        </article>
      </MovieLink>
    </li>
  );
};

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
};
