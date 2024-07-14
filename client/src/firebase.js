// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-p-bdcad.firebaseapp.com",
  projectId: "mern-p-bdcad",
  storageBucket: "mern-p-bdcad.appspot.com",
  messagingSenderId: "869146861840",
  appId: "1:869146861840:web:80c2597215d33a3b95c595"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);