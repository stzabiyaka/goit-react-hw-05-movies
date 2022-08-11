import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
