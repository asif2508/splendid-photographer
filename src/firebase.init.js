// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIaclSgtq61UrcB3PyLFe7dLLtWuBWhps",
  authDomain: "splendid-photographer.firebaseapp.com",
  projectId: "splendid-photographer",
  storageBucket: "splendid-photographer.appspot.com",
  messagingSenderId: "774270165920",
  appId: "1:774270165920:web:cb267cf651993add077ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;