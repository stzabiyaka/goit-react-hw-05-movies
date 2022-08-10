import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { Header, Container } from '.';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
