import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const SiteNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 12px 4px;
  color: #212121;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  vertical-align: middle;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    color: orange;
  }
`;
