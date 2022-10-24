import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAAm1ejAHBpaC0o5JMd9MO57mAE4Euszhk",
    authDomain: "playdatatalk.firebaseapp.com",
    projectId: "playdatatalk",
    storageBucket: "playdatatalk.appspot.com",
    messagingSenderId: "957807197538",
    appId: "1:957807197538:web:fafd94b0fe3db9021c003b"
  };

export default firebase.initializeApp(firebaseConfig);