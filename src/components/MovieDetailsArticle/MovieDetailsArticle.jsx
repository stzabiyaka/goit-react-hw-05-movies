import PropTypes from 'prop-types';
import {
  Container,
  Poster,
  Info,
  Overview,
  InfoText,
  Genres,
} from './MovieDetailsArticle.styled';
import { PageTitle } from 'components/PageTitle';
import { NoImage } from 'utilities/NoImage.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

export const MovieDetailsArticle = ({
  title,
  posterPath,
  releaseDate,
  userScore,
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
        <InfoText>User Score: {Math.round(userScore * 10)}%</InfoText>
        <Overview>Overview</Overview>
        <InfoText>{overview}</InfoText>
        <Genres>Genres</Genres>
        <InfoText>{genres}</InfoText>
      </Info>
    </Container>
  );
};

MovieDetailsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};
