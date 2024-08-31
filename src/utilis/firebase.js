// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjTPYVK3rNfArkISZXDQOKF4KSoE8MrZ0",
  authDomain: "netflixgpt-c4a5f.firebaseapp.com",
  projectId: "netflixgpt-c4a5f",
  storageBucket: "netflixgpt-c4a5f.appspot.com",
  messagingSenderId: "115136053274",
  appId: "1:115136053274:web:8eca79a5eb13b8c42c91a3",
  measurementId: "G-FM2TEGD7MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();