import styled from 'styled-components';

export const FilterBar = styled.div`
  margin: 0 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #b9b9b9;
`;

export const FilterGroup = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 998px;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: #000;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 15px 15px;
  padding: 12px;
  width: 23%;

  > a {
    img {
      margin: 0 0 20px;
      width: 100%;
      height: 174px;
      border-bottom: 4px solid #e92829;
    }
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: #404040;

  > a {
    color: #404040;
    text-decoration: none;
  }
`;

export const FavIcon = styled.img`
  width: 17px;
  cursor: pointer;
`;
