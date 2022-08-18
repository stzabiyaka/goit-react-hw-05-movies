import ClipLoader from 'react-spinners/ClipLoader';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ClipLoader color="orange" size={100} />
    </Container>
  );
};

export default Loader;
