import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CategoryTitle = styled.span`
  margin: 0 0 10px;
  font-size: 12px;
`;

export const CategoryGroup = styled(Content)`
  flex-direction: row;
  align-items: flex-end;
  font-size: 14px;
`;

export const CategoryIcon = styled.img`
  margin: 0 10px 0 0;
  width: 25px;
`;
