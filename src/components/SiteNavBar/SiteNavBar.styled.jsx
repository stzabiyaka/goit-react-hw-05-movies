import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 10px;

  box-shadow: 0 5px 10px #808080;
`;

export const Link = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: orange;
  }
`;
