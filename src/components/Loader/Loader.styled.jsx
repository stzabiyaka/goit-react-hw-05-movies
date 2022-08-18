import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100vh;
  overflow: hidden;
  pointer-events: none;

  background-color: transparent;
  z-index: 1000;
`;
