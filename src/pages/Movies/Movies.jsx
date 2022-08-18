import { useFetchMoviesBySearch } from 'hooks/useFetchMoviesBySearch';
import Section from 'components/Section';
import SearchForm from 'components/SearchForm';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
import { STATUS } from 'utilities/status';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams] = useSearchParams();

  const { movies, status } = useFetchMoviesBySearch(searchParams.get('query'));

  return (
    <>
      <SearchForm />
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && (
        <Section>
          <MoviesGallery movies={movies} />
        </Section>
      )}
      {status === STATUS.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};

export default Movies;
