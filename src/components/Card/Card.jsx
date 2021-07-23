import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { ImgCard, DivAddFavorite, DivCard, DivCardDetails, DivContainerImg, NameCharacter } from './styledCard';

const Card = (props) => {
  const { perro, id, addFavoritos } = props;

  const color2 = '#FD4937';
  const color1 = '#615F67';

  return (
    <DivCard>
      <DivContainerImg>
        <ImgCard src={perro} alt={`perro${id}`} />
      </DivContainerImg>
      <DivCardDetails className='card_details'>
        <NameCharacter className='name_character'>{`perro${id}`}</NameCharacter>
      </DivCardDetails>
      <DivAddFavorite onClick={() => {
        addFavoritos(perro);
      }}
      >
        <MdFavorite size='2rem' color={typeof id === 'number' ? color2 : color1} />
      </DivAddFavorite>
    </DivCard>
  );
};

export default Card;
