import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyDDm_z5BwRyStEAPaFr0JyX1xZC1-tmys4",
    authDomain: "underkoen.firebaseapp.com",
    projectId: "underkoen",
    storageBucket: "underkoen.appspot.com",
    messagingSenderId: "474534987620",
    appId: "1:474534987620:web:f7d2e49d1a83b80f5c1c71"
};

firebase.initializeApp(firebaseConfig);

export default firebase;