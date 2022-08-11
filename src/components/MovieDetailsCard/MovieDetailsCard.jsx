import PropTypes from 'prop-types';
import {
  Container,
  Poster,
  Info,
  Overview,
  InfoText,
  Genres,
} from './MovieDetailsCard.styled';
import { PageTitle } from 'components/PageTitle';
import { NoImage } from 'utilities/NoImage.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

export const MovieDetailsCard = ({
  title,
  posterPath,
  releaseDate,
  overview,
  genres,
}) => {
  return (
    <Container>
      {posterPath ? (
        <Poster src={`${BASE_URL}${posterPath}`} alt={`${title} poster`} />
      ) : (
        <NoImage>Sorry, no poster available :(</NoImage>
      )}
      <Info>
        <PageTitle pageTitle={`${title} (${releaseDate})`} />
        <Overview>Overview</Overview>
        <InfoText>{overview}</InfoText>
        <Genres>Genres</Genres>
        <InfoText>{genres}</InfoText>
      </Info>
    </Container>
  );
};

MovieDetailsCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};
