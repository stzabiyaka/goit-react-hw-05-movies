import { Link, SiteNav } from '.';

const Navigation = () => {
  return (
    <SiteNav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </SiteNav>
  );
};

export default Navigation;
