// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfdKISNDO2hBKmJHIPtlFuN3nYO0NY5Hs",
  authDomain: "practice-email-pass-auth-56b7a.firebaseapp.com",
  projectId: "practice-email-pass-auth-56b7a",
  storageBucket: "practice-email-pass-auth-56b7a.appspot.com",
  messagingSenderId: "629447711661",
  appId: "1:629447711661:web:688374d5e11649734f5f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;