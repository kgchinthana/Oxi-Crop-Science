import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBofyPDAj-NwddUKwow-W__VTowfUgvvWU',
  authDomain: 'oxi-crop-science.firebaseapp.com',
  projectId: 'oxi-crop-science',
  storageBucket: 'oxi-crop-science.appspot.com',
  messagingSenderId: '583507428378',
  appId: '1:583507428378:web:4224e3dd30327230bcfda3',
  measurementId: 'G-22N3LXK3XY',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {  provider };

//https://oxi-crop-science.firebaseapp.com/__/auth/handler