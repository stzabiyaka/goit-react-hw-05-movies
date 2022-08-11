import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AdditionalInfo = styled.div`
  margin-top: 12px;
  padding: 12px;
  box-shadow: 0 0 10px #808080;
`;

export const AdditionalInfoDisplay = styled.div`
  padding: 0 12px;
`;

export const Link = styled(NavLink)`
  display: block;
  color: #212121;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #ffa600ba;
  }

  &.active {
    color: orange;
  }
`;
