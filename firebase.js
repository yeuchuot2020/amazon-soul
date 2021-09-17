import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFfYBbvG3QuZ0c1JzwFFIw11xXR_IZ5oQ",
    authDomain: "amz-2-5f72e.firebaseapp.com",
    projectId: "amz-2-5f72e",
    storageBucket: "amz-2-5f72e.appspot.com",
    messagingSenderId: "326460190952",
    appId: "1:326460190952:web:42ad99b1c7b5164918d95d",
    measurementId: "G-97MMX53MXK"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;