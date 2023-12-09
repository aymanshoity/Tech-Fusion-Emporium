// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0dbSfKHlRm8yFB__raS4waGGcael0P6s",
  authDomain: "techfusionemporium-9ef4a.firebaseapp.com",
  projectId: "techfusionemporium-9ef4a",
  storageBucket: "techfusionemporium-9ef4a.appspot.com",
  messagingSenderId: "710815441049",
  appId: "1:710815441049:web:b883cabb70b08ab5fcd808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth