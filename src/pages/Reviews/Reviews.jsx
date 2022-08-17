import { useFetchReviews } from 'hooks/useFetchReviews';
import { STATUS } from 'utilities/status';
import { Notification } from 'components/Notification';
import { ReviewsList } from 'components/ReviewsList';

export const Reviews = () => {
  const { reviews, status } = useFetchReviews();
  return (
    <>
      {status === STATUS.PENDING && <Notification message="Loading..." />}
      {status === STATUS.RESOLVED && reviews ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <Notification message="We don't have any reviews fot this movie." />
      )}
      {status === STATUS.REJECTED && (
        <Notification message="Ooops! Something went wrong :(... please reload the page." />
      )}
    </>
  );
};
