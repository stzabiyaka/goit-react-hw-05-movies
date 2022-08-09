import { useParams, Outlet } from 'react-router-dom';
export const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <>
      <h1>Movie Id : {movieId}</h1>
      <Outlet />
    </>
  );
};
