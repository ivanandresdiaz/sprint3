/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnScreen from '../../hooks/useOnScreen';
import { loadPerrosRandom } from '../../actions/getDataActions';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { getName } from '../../reducers/loggedReducer';
import { singOutAuth } from '../../actions/authActions';
import { DivContainerCards, DivContainerSpinner } from './styledHome';
import { getPerrosRandom } from '../../reducers/storagePerrosReducer';
import Spinner from '../../components/Spinner';

const Home = () => {
  const name = useSelector(getName);
  const perrosRandom = useSelector(getPerrosRandom);
  const [ref, visible] = useOnScreen({ threshold: 0.2 });
  const dispatch = useDispatch();
  const handleCerrarSesion = useCallback(
    () => {
      dispatch(singOutAuth());
    },
    [name],
  );

  useEffect(() => {
    if (visible) {
      dispatch(loadPerrosRandom());
    }
  }, [visible]);

  return (
    <div>
      <Header name={name} handleCerrarSesion={handleCerrarSesion} />
      <DivContainerCards>
        {perrosRandom && perrosRandom.map((perro, index) => <Card key={`perroRandom${index}`} perro={perro} id={index} />)}
      </DivContainerCards>
      <DivContainerSpinner ref={ref}>
        <Spinner />
      </DivContainerSpinner>
    </div>
  );
};

export default Home;
