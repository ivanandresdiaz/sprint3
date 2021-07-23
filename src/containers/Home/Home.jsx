/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPerrosRandom } from '../../actions/getDataActions';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { getName } from '../../reducers/loggedReducer';
import { singOutAuth } from '../../actions/authActions';
import { DivContainerCards } from './styledHome';
import { getPerrosRandom } from '../../reducers/storagePerrosReducer';

const Home = () => {
  const name = useSelector(getName);
  const perrosRandom = useSelector(getPerrosRandom);
  console.log(perrosRandom);
  const dispatch = useDispatch();
  const handleCerrarSesion = useCallback(
    () => {
      dispatch(singOutAuth());
    },
    [name],
  );
  useEffect(() => {
    dispatch(loadPerrosRandom());
  }, []);
  const addFavoritos = () => {};
  return (
    <div>
      <Header name={name} handleCerrarSesion={handleCerrarSesion} />
      <DivContainerCards>
        {perrosRandom && perrosRandom.map((perro) => <Card key={perro.id} perro={perro} addFavoritos={addFavoritos} />)}
      </DivContainerCards>
    </div>
  );
};

export default Home;
