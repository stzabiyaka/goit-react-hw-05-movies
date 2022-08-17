import PropTypes from 'prop-types';
import { NoImage } from 'utilities/NoImage.styled';
import { Info, Item, Photo, Name, InfoText } from './CastGalleryCard.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const CastGalleryCard = ({ name, character, photoPath }) => {
  return (
    <Item>
      {photoPath ? (
        <Photo src={`${BASE_URL}${photoPath}`} alt={`${name} photo`} />
      ) : (
        <NoImage>Sorry, no photo available :(</NoImage>
      )}
      <Info>
        <Name>{name}</Name>
        <InfoText>{`Character: ${character}`}</InfoText>
      </Info>
    </Item>
  );
};

CastGalleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photoPath: PropTypes.string,
};
