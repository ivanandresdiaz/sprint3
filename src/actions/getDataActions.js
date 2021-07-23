/* eslint-disable import/prefer-default-export */
import { types } from '../types';

export const loadPerrosRandom = () => async (dispatch) => {
  const API = 'https://dog.ceo/api/breeds/image/random/20';
  try {
    const response = await fetch(API);
    const dataCasi = await response.json();
    const data = dataCasi.message;
    dispatch({ type: types.loadPerrosRandom, payload: data });
    dispatch();
  } catch (error) {
    console.log('Fetch Error', error);
  };

};
