// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqaHKkaS4hDbsGWkcdcIkBbyHajxSIy70",
  authDomain: "react-test-5-1987c.firebaseapp.com",
  projectId: "react-test-5-1987c",
  storageBucket: "react-test-5-1987c.appspot.com",
  messagingSenderId: "289338583527",
  appId: "1:289338583527:web:5ce4cfef6123823f2c3542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider =  new GoogleAuthProvider();
export const db = getFirestore(app);