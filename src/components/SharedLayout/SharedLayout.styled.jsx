import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  max-width: 100vw;
  width: 100%;
  height: 50px;
  padding: 12px 24px;

  box-shadow: 0 5px 10px #808080;
`;

export const SiteNav = styled.nav`
  display: block;
  padding: 0;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 0 12px;
  color: #212121;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    color: orange;
  }
`;
