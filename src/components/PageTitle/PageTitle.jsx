import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

const PageTitle = ({ pageTitle, noIndent = false }) => {
  return <Title noIndent={noIndent}>{pageTitle}</Title>;
};

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  noIndent: PropTypes.bool,
};

export default PageTitle;
