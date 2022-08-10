import PropTypes from 'prop-types';
import { Card, Poster } from './MovieCard.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MovieCard = ({ title, posterPath }) => {
  return (
    <Card>
      {posterPath && (
        <Poster src={`${BASE_URL}${posterPath}`} alt={`${title} poster`} />
      )}
      {title}
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
};
