/* eslint-disable import/prefer-default-export */
const API = 'https://dog.ceo/api/breeds/image/random/20';
export const getDataPerrosRandom = async () => {
  try {
    const response = await fetch(API);
    const dataCasi = await response.json();
    const data = dataCasi.message;
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };

};
