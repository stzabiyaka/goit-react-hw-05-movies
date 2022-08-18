import styled from '@emotion/styled';

export const Title = styled.h1`
  padding: 12px;
  padding-left: ${props => (props.noIndent ? '0' : '12px')};
  font-size: 24px;
  font-weight: bold;
`;
