import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Header, Container } from '.';
const SharedLayout = () => {
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

export default SharedLayout;
