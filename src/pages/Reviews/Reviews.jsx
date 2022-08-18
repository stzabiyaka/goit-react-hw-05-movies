import ReviewsList from 'components/ReviewsList';
import Notification from 'components/Notification';
import { useFetchReviews } from 'hooks/useFetchReviews';
import { STATUS } from 'utilities/status';

const Reviews = () => {
  const { reviews, status } = useFetchReviews();
  return (
    <>
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
export default Reviews;
