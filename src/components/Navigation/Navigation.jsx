import { Link, SiteNav } from '.';

export const Navigation = () => {
  return (
    <SiteNav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </SiteNav>
  );
};
