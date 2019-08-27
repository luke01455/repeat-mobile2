import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO-rolZDtD_24UeagRLeGO3y67sW084EI",
    authDomain: "repeat-db.firebaseapp.com",
    databaseURL: "https://repeat-db.firebaseio.com",
    projectId: "repeat-db",
    storageBucket: "",
    messagingSenderId: "910612177910",
    appId: "1:910612177910:web:26a2ea0ab983beea"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;