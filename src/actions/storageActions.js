/* eslint-disable import/prefer-default-export */
import { db, firebase } from '../firebase/firebaseconfig';
import { types } from '../types';

export const addFavorite = (ImagennuevoPerro, nombre) => async (dispatch, getState) => {
  try {
    const usuario = getState().logged.name;
    const referenciaDocumento = await db.collection('mascotas').add({
      cover: ImagennuevoPerro,
      dueño: usuario,
      nombre,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
    });
    if (referenciaDocumento) {
      console.log(referenciaDocumento);
      alert('Agregado a favoritos');
    }
  } catch (error) {
    alert('no se puedo agregar a favoritos, intente de nuevo...');
  };

};
