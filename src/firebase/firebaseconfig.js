import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyCHP5ffpky-8EikNqpKVZunCeJkR2NJGtY',
  authDomain: 'sprint3-d3865.firebaseapp.com',
  projectId: 'sprint3-d3865',
  storageBucket: 'sprint3-d3865.appspot.com',
  messagingSenderId: '111019399686',
  appId: '1:111019399686:web:6b4db572a1ec646e9c8187',
  measurementId: 'G-WN89E66418',
});

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export {
  db,
  googleAuthProvider,
  facebookAuthProvider,
  firebase,
};
