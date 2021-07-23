import React from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { ImgCard, DivAddFavorite, DivCard, DivCardDetails, DivContainerImg, NameCharacter } from './styledCard';

const Card = (props) => {
  const { perro, addFavoritos } = props;

  const color2 = '#FD4937';
  const color1 = '#615F67';

  return (
    <DivCard>
      {/* <DivContainerImg>
        <ImgCard src={character.image} alt={character.name} />
      </DivContainerImg>
      <DivCardDetails className='card_details'>
        <NameCharacter className='name_character'>{character.name}</NameCharacter>
      </DivCardDetails>
      <DivAddFavorite onClick={() => {
        addFavoritos(character);
      }}
      >
        {console.log(character.keyFavorite)}
        <MdFavorite size='2rem' color={typeof character.keyFavorite === 'number' ? color2 : color1} />
      </DivAddFavorite> */}
    </DivCard>
  );
};

export default Card;
