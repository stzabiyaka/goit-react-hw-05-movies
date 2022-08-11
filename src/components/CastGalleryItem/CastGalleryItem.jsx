import PropTypes from 'prop-types';
import { NoImage } from 'utilities/NoImage.styled';
import { Info, Item, Photo, Name, InfoText } from './CastGalleryItem.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const CastGalleryItem = ({ name, character, photoPath }) => {
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

CastGalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photoPath: PropTypes.string,
};
