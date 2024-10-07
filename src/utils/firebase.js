// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-w3zQ6Dl0bk61-jXAq54otj6sDJPbNg",
  authDomain: "pushnetflix-aa459.firebaseapp.com",
  projectId: "pushnetflix-aa459",
  storageBucket: "pushnetflix-aa459.appspot.com",
  messagingSenderId: "393972045028",
  appId: "1:393972045028:web:849effefc1ac7667ad08f1",
  measurementId: "G-2BXY7S6685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
