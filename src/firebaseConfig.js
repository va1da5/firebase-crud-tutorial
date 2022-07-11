import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD1...",
  authDomain: "fir-crud-tutorial-b8a4e.firebaseapp.com",
  projectId: "fir-crud-tutorial-b8a4e",
  storageBucket: "fir-crud-tutorial-b8a4e.appspot.com",
  messagingSenderId: "657348077973",
  appId: "1:657348077973:web:04...",
  measurementId: "G-0JV...",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
