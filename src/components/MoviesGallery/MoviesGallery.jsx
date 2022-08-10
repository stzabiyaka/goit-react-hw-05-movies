import PropTypes from 'prop-types';
import { MovieCard } from 'components/MovieCard';
import { Gallery } from '.';

export const MoviesGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </Gallery>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
