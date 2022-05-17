// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNfxz0EwPlxKdkNcj_doIo_6wiKG3INMk",
  authDomain: "contextapi-practice.firebaseapp.com",
  projectId: "contextapi-practice",
  storageBucket: "contextapi-practice.appspot.com",
  messagingSenderId: "491525718928",
  appId: "1:491525718928:web:85a662d5f3370d2e4a6915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth