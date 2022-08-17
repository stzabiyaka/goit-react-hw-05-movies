import { ReviewListItem } from 'components/ReviewsListItem';
import PropTypes from 'prop-types';

import { List } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(review => {
        return (
          <ReviewListItem
            key={review.id}
            author={review.author}
            content={review.content}
            avatarPath={review.author_details.avatar_path}
          />
        );
      })}
    </List>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
      }),
    }).isRequired
  ).isRequired,
};
