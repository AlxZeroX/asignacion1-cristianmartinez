import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAowh6H-7aGXXmPS1axLFSi5zCSE_J1DQo",
  authDomain: "e-commerce-24233.firebaseapp.com",
  databaseURL: "https://e-commerce-24233-default-rtdb.firebaseio.com",
  projectId: "e-commerce-24233",
  storageBucket: "e-commerce-24233.appspot.com",
  messagingSenderId: "1076329648823",
  appId: "1:1076329648823:web:37c4be7856bd68ee43b332",
  measurementId: "G-E137NBFTE3"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

//https://e-commerce-24233.firebaseapp.com/__/auth/handler

export {
  firebaseApp,
  googleProvider,
  facebookProvider
};
