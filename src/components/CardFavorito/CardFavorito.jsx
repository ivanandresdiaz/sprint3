import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { addFavorite } from '../../actions/storageActions';
import { ImgCard, DivAddFavorite, DivCard, DivCardDetails, DivContainerImg, NameCharacter } from './styledCardFavorito';

const Card = (props) => {
  const { perro, nombre } = props;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const color1 = '#FD4937';
  const handleDeleteFavoritos = () => {
    if (favorite) {
      setFavorite(false);
    } else {
      const nombrePerro = prompt('¿Como quieres llamar al Perro?');
      if (nombrePerro) {
        dispatch(addFavorite(perro, nombrePerro));
        setFavorite(true);
      }

    }
  };
  return (
    <DivCard>
      <DivContainerImg>
        <ImgCard src={perro} alt={`perro${nombre}`} />
      </DivContainerImg>
      <DivCardDetails className='card_details'>
        <NameCharacter className='name_character'>{`${nombre}`}</NameCharacter>
      </DivCardDetails>
      <DivAddFavorite onClick={() => {
        handleDeleteFavoritos(perro);
      }}
      >
        <MdDelete size='2rem' color={color1} />
      </DivAddFavorite>
    </DivCard>
  );
};

export default Card;
