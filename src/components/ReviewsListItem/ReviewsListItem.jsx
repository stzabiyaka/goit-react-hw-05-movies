import PropTypes from 'prop-types';
import { NoImage } from 'utilities/NoImage.styled';
import {
  Author,
  AvatarHolder,
  Card,
  Avatar,
  AuthorName,
  Text,
} from './ReviewsListItem.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const ReviewListItem = ({ author, content, avatarPath }) => {
  const avatar =
    avatarPath && avatarPath.startsWith('/http')
      ? avatarPath.slice(1)
      : `${BASE_URL}${avatarPath}`;
  return (
    <Card>
      <Author>
        <AvatarHolder>
          {avatarPath ? (
            <Avatar src={avatar} alt={`${author} avatar`} />
          ) : (
            <NoImage>No avatar</NoImage>
          )}
        </AvatarHolder>
        <AuthorName>Author: {author}</AuthorName>
      </Author>
      <Text>{content}</Text>
    </Card>
  );
};

ReviewListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatarPath: PropTypes.string,
};

export default ReviewListItem;
