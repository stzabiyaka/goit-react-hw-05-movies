import { PageTitle } from 'components/PageTitle';
import { MoviesGallery } from 'components/MoviesGallery';
import { useState, useEffect } from 'react';

export const Home = ({ getContent }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getContent()
      .then(data => {
        const movies = data.results;
        setMovies(movies);
      })
      .catch(console.log);
  }, [getContent]);

  return (
    <>
      <PageTitle pageTitle="Tranding Today" />
      {movies && <MoviesGallery movies={movies} />}
    </>
  );
};
