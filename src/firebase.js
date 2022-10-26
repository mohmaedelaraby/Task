// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAnqe2LnGz96-Gz87WnWHZkvYHIzVTCg0",
  authDomain: "gameball-task-ui.firebaseapp.com",
  projectId: "gameball-task-ui",
  storageBucket: "gameball-task-ui.appspot.com",
  messagingSenderId: "8827561697",
  appId: "1:8827561697:web:696db17524e692b08779a0",
  measurementId: "G-NL3Z715F9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);