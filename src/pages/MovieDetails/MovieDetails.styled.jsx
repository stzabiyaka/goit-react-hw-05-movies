import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as IconArrow } from '../../icons/icon-arrow.svg';

export const AdditionalInfo = styled.div`
  margin-top: 12px;
  padding: 12px;
  box-shadow: 0 0 10px #808080;
`;

export const AdditionalInfoDisplay = styled.div`
  padding: 0 12px;
`;

export const InfoLink = styled(NavLink)`
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

export const Arrow = styled(IconArrow)`
  width: 16px;
  height: auto;
  margin-right: 4px;
  fill: currentColor;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  margin-top: 12px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #808080;

  &:hover,
  &:focus {
    color: orange;
  }
`;
