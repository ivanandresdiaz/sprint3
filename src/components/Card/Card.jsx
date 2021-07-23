import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { addFavorite } from '../../actions/storageActions';
import { ImgCard, DivAddFavorite, DivCard, DivCardDetails, DivContainerImg, NameCharacter } from './styledCard';

const Card = (props) => {
  const { perro, id } = props;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const color1 = '#FD4937';
  const color2 = '#0a0a0c';
  const handleAddFavoritos = () => {
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
        <ImgCard src={perro} alt={`perro${id}`} />
      </DivContainerImg>
      <DivCardDetails className='card_details'>
        <NameCharacter className='name_character'>{`Mascota Numero ${id}`}</NameCharacter>
      </DivCardDetails>
      <DivAddFavorite onClick={() => {
        handleAddFavoritos(perro);
      }}
      >
        <MdFavorite size='2rem' color={favorite ? color1 : color2} />
      </DivAddFavorite>
    </DivCard>
  );
};

export default Card;
