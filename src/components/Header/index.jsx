import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  HeaderWrapper, Logo, Title, Disclaimer, InputSearch, SearchIcon,
} from './styles';

import MarvelLogo from '../../assets/images/logo/Group@3x.png';
import SearchLogo from '../../assets/images/icon/Shape@3x.png';

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
