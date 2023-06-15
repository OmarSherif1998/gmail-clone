import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAKkN85tGCUhyDvKfgYSqxpBDrO3Uu2FM0",
    authDomain: "clone-95052.firebaseapp.com",
    projectId: "clone-95052",
    storageBucket: "clone-95052.appspot.com",
    messagingSenderId: "872393993256",
    appId: "1:872393993256:web:3d26bb8ebc751bf063591d"
  };

  // eslint-disable-next-line no-unused-vars
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  

  export {db, auth, provider};