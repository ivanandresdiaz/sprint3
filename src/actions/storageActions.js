/* eslint-disable import/prefer-default-export */
import { db } from '../firebase/firebaseconfig';
import { types } from '../types';

export const addFavorite = (nuevoPerro, nombre) => async (dispatch) => {
  try {
    console.log(nuevoPerro, nombre);
    // await db.collection('mascotas').add(nuevoPerro, nombre);
  } catch (error) {
    console.log('erro agregar FAVORITO', error);
  };

};
