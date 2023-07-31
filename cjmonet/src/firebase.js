// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAtY1omSykEBIG1Hu_K0XeZfPyMSbAMxxs",
  authDomain: "cj-monet.firebaseapp.com",
  projectId: "cj-monet",
  storageBucket: "cj-monet.appspot.com",
  messagingSenderId: "978699400635",
  appId: "1:978699400635:web:49b12e604401d40b34809e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);