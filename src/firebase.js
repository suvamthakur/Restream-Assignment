// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBQE4KguctZ7QWTYwQTPDyZv0r_AnIO5g",
  authDomain: "restream-assignment.firebaseapp.com",
  projectId: "restream-assignment",
  storageBucket: "restream-assignment.appspot.com",
  messagingSenderId: "927297472596",
  appId: "1:927297472596:web:6906f8f6077a75e42485c1",
  measurementId: "G-8LXSENXNZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();
