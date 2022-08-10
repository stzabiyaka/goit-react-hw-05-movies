import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ pageTitle }) => {
  return <Title>{pageTitle}</Title>;
};

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
