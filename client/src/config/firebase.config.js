// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAQ3xLutyh9rk4Tu02IMhu7Hosq-WVxX54",
//   authDomain: "fullstack-foodapp-2.firebaseapp.com",
//   projectId: "fullstack-foodapp-2",
//   storageBucket: "fullstack-foodapp-2.appspot.com",
//   messagingSenderId: "550913080033",
//   appId: "1:550913080033:web:f73f2b748d7c1c8b9315a0"

     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
     appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };