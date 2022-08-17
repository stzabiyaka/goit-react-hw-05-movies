import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
`;

export const InfoText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`;
