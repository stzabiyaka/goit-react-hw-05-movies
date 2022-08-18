import { useFetchCast } from 'hooks/useFetchCast';
import { STATUS } from 'utilities/status';
import Notification from 'components/Notification';
import CastGallery from 'components/CastGallery';

const Cast = () => {
  const { cast, status } = useFetchCast();
  return (
    <>
      {status === STATUS.RESOLVED && <CastGallery cast={cast} />}
      {status === STATUS.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};

export default Cast;
