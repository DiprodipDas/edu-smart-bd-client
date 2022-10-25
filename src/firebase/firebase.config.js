// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6LNhxGdqVtW1hg5OmHwCdgW_EfHXd16g",
  authDomain: "edu-smart-bd.firebaseapp.com",
  projectId: "edu-smart-bd",
  storageBucket: "edu-smart-bd.appspot.com",
  messagingSenderId: "511237488577",
  appId: "1:511237488577:web:6c3ed8bc17064058513940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;