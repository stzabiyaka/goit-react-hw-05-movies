import { Outlet } from 'react-router-dom';
import { Header, Link, Container, SiteNav } from '.';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <SiteNav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </SiteNav>
      </Header>
      <Outlet />
    </Container>
  );
};
