// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAz7SCumf50n8ZZ1ZcR54XUseGIEeVlsBc',
  authDomain: 'licruaschool.firebaseapp.com',
  projectId: 'licruaschool',
  storageBucket: 'licruaschool.firebasestorage.app',
  messagingSenderId: '458859020553',
  appId: '1:458859020553:web:db6f689ba132ed9b0753d8',
  measurementId: 'G-X10QRTW9Q5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
