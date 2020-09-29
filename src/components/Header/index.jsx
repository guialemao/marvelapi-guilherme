import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import MarvelLogo from '../../assets/images/logo/Group@3x.png';
import SearchLogo from '../../assets/images/icon/Shape@3x.png';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 260px;
`;

const Title = styled.h1`
  margin: 10px 0 15px;
  font-size: 28px;
  text-transform: uppercase;
  color: #404040;
`;

const Disclaimer = styled.p`
  margin: 0 0 50px;
  font-size: 12px;
  color: #8c8c8c;
`;

const InputSearch = styled.div`
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

const SearchIcon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={MarvelLogo} />
      </Link>
      {pathname === '/' && (
        <>
          <Title>Explore o Universo</Title>
          <Disclaimer>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </Disclaimer>
          <InputSearch>
            <SearchIcon src={SearchLogo} />
            <input type="text" placeholder="Procure por heróis" />
          </InputSearch>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
