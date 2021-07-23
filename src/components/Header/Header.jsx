/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FcNoIdea } from 'react-icons/fc';
import { DivContainerHeader } from './styledHeader';

const Header = (props) => {
  const { name, handleCerrarSesion } = props;
  return (
    <DivContainerHeader>
      <h1>
        {name && `Bienvenido al Home  ${name}`}
      </h1>

      <div onClick={handleCerrarSesion}>
        <h1>Cerrar  sesion</h1>
        <FcNoIdea size='4rem' />
      </div>
    </DivContainerHeader>
  );
};

export default Header;
