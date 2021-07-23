/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { FcNoIdea } from 'react-icons/fc';
import { MdFavorite, MdHome } from 'react-icons/md';
import { DivItemNav, HeaderNav } from './styledHeader';

const Header = (props) => {
  const { name, handleCerrarSesion } = props;
  return (
    <HeaderNav>
      <Link to='/'>
        <DivItemNav>
          <MdHome />
          {name && `Home ${name}`}
        </DivItemNav>
      </Link>
      <Link to='/favoritos'>
        <DivItemNav>
          <MdFavorite />
          Favoritos
        </DivItemNav>
      </Link>
      <DivItemNav onClick={handleCerrarSesion}>
        <FcNoIdea size='4rem' />
        <p>Cerrar  sesion</p>
      </DivItemNav>
    </HeaderNav>
  );
};

export default Header;
