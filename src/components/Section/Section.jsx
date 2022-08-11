import PropTypes from 'prop-types';
import { Container, Title } from '.';

export const Section = ({ sectionTitle, children }) => {
  return (
    <Container>
      {sectionTitle && <Title>{sectionTitle}</Title>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.element,
};
