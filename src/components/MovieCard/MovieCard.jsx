import PropTypes from 'prop-types';
import { NoImage } from 'utilities/NoImage.styled';
import { Poster, Title, MovieLink } from './MovieCard.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MovieCard = ({ title, posterPath, movieId }) => {
  return (
    <li>
      <MovieLink to={`/movies/${movieId}`}>
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
