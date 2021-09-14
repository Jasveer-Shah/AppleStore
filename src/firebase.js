import firebase from 'firebase/compat/app';
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// I changed with compat


const firebaseConfig = {
    apiKey: "AIzaSyD0FX33gsaqP3C-MCj7-cBPSyp6TJSAuvQ",
    authDomain: "applestore-95882.firebaseapp.com",
    projectId: "applestore-95882",
    storageBucket: "applestore-95882.appspot.com",
    messagingSenderId: "819448408845",
    appId: "1:819448408845:web:8dcfe7412b46fdc0ca1e44",
    measurementId: "G-NC59VGFMH6"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

export {auth, db}
