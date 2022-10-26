// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeydXKJTUnFHBWr30el6ZcZTrE-DQjPdM",
  authDomain: "gameball-task.firebaseapp.com",
  projectId: "gameball-task",
  storageBucket: "gameball-task.appspot.com",
  messagingSenderId: "258007510455",
  appId: "1:258007510455:web:4701058c69d6e0dc448c32",
  measurementId: "G-0HZMG8PY7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);