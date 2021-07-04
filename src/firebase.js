import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2DN_gCx4mNi_LjxFZ3gpp0a08s8E2b8Q",
  authDomain: "clo-8cd1a.firebaseapp.com",
  projectId: "clo-8cd1a",
  storageBucket: "clo-8cd1a.appspot.com",
  messagingSenderId: "78079891234",
  appId: "1:78079891234:web:bb46d4087f9b7f56e6777b",
  measurementId: "G-L96689WP0E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};