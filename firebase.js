// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtPF_Sgt9-H6s43mD803amXk8q49OoyqM",
  authDomain: "bloom-34100.firebaseapp.com",
  projectId: "bloom-34100",
  storageBucket: "bloom-34100.appspot.com",
  messagingSenderId: "790603480905",
  appId: "1:790603480905:web:875b8195bb78e99a6d2498",
  measurementId: "G-NCFV82QE5F"
};

// Initialize Firebase
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };