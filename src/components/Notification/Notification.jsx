import PropTypes from 'prop-types';
import { Container, Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
