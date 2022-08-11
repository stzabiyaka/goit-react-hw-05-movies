import styled from '@emotion/styled';

export const Container = styled.section`
  width: calc(100% - 24px);
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 16px;

  &.visuallyHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
