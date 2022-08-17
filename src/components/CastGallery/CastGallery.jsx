import { CastGalleryCard } from 'components/CastGalleryCard';
import PropTypes from 'prop-types';
import { Gallery } from './CastGallery.styled';

export const CastGallery = ({ cast }) => {
  return (
    <>
      {cast && (
        <Gallery>
          {cast.map(actor => {
            return (
              <CastGalleryCard
                key={actor.id}
                name={actor.name}
                character={actor.character}
                photoPath={actor.profile_path}
              />
            );
          })}
        </Gallery>
      )}
    </>
  );
};

CastGallery.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
