import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCW3SwXD1vBbze-atiufUXyHInC6GTj9Ls",
  authDomain: "react-app-curso-84eb5.firebaseapp.com",
  projectId: "react-app-curso-84eb5",
  storageBucket: "react-app-curso-84eb5.appspot.com",
  messagingSenderId: "863083438657",
  appId: "1:863083438657:web:cc8c2bb4abd43d64f35cc0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase,
  
}

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAowh6H-7aGXXmPS1axLFSi5zCSE_J1DQo",
  //   authDomain: "e-commerce-24233.firebaseapp.com",
  //   projectId: "e-commerce-24233",
  //   storageBucket: "e-commerce-24233.appspot.com",
  //   messagingSenderId: "1076329648823",
  //   appId: "1:1076329648823:web:37c4be7856bd68ee43b332"
  // };
