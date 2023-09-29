// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBZceiNQKyRGd3VuXEMcijzFk4lfvzb6Y",
  authDomain: "cinetrax-2d042.firebaseapp.com",
  projectId: "cinetrax-2d042",
  storageBucket: "cinetrax-2d042.appspot.com",
  messagingSenderId: "616101489290",
  appId: "1:616101489290:web:7cd3e2fb8a6f1fd3c35b73",
  measurementId: "G-PF607TS5ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);
