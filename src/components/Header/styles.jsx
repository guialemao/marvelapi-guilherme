import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 260px;
`;

export const Title = styled.h1`
  margin: 10px 0 15px;
  font-size: 28px;
  text-transform: uppercase;
  color: #404040;
`;

export const Disclaimer = styled.p`
  margin: 0 0 50px;
  font-size: 12px;
  color: #8c8c8c;
`;

export const InputSearch = styled.div`
  margin: 0 0 50px;
  padding: 20px;
  width: 650px;
  background: #fdecec;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;

    ::placeholder {
      color: #fa7c7c;
      letter-spacing: 1px;
    }
  }
`;

export const SearchIcon = styled.img`
  width: 20px;
  margin-right: 20px;
`;
