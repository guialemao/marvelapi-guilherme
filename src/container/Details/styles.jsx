import styled from 'styled-components';

export const HeroWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const HeroInfo = styled.div`
  width: 400px;
  margin-right: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeroPic = styled.div`
  width: 100%;

  > img {
    width: 240px;
  }
`;

export const AppearancesWrapper = styled.div`
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
