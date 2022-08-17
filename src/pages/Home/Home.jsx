import { PageTitle } from 'components/PageTitle';
import { MoviesGallery } from 'components/MoviesGallery';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { STATUS } from 'utilities/status';
import { useFetchTrending } from 'hooks/useFetchTrending';

export const Home = () => {
  const { movies, status } = useFetchTrending();

  return (
    <>
      <PageTitle pageTitle="Tranding Today" />
      {status === STATUS.PENDING && <Notification message="Loading..." />}
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
