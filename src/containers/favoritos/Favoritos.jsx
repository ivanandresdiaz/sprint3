/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { consultarFavoritos } from '../../actions/storageActions';
import Header from '../../components/Header/Header';
import { getPerrosFavoritos } from '../../reducers/storagePerrosReducer';
import { getName } from '../../reducers/loggedReducer';
import { getCargando } from '../../reducers/uiReducer';
import CardFavorito from '../../components/CardFavorito/CardFavorito';
import { DivContainerCards, DivContainerSpinner } from './styledFavorites';
import Spinner from '../../components/Spinner';

const Favoritos = () => {
  const name = useSelector(getName);
  const cargando = useSelector(getCargando);
  const perrosFavoritos = useSelector(getPerrosFavoritos);

  const dispatch = useDispatch();
  useEffect(() => {

    if (perrosFavoritos.length === 0) {
      console.log('se mando a llamar el favoritos');
      dispatch(consultarFavoritos());
    }
  }, []);
  const handleCerrarSesion = useCallback(
    () => {
      dispatch(singOutAuth());
    },
    [name],
  );
  return (
    <div>
      <Header name={name} handleCerrarSesion={handleCerrarSesion} />
      {cargando ? (
        <DivContainerSpinner>
          <Spinner />
        </DivContainerSpinner>
      ) : (
        <>
          <DivContainerCards>
            {perrosFavoritos.map((perro, index) => <CardFavorito key={`${perro.name}${index}`} perro={perro.cover} nombre={perro.nombre} />)}
          </DivContainerCards>
        </>
      )}

    </div>
  );
};

export default Favoritos;
