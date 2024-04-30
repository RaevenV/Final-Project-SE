import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "aol-se-1bcc3.firebaseapp.com",
  projectId: "aol-se-1bcc3",
  storageBucket: "aol-se-1bcc3.appspot.com",
  messagingSenderId: "42443487142",
  appId: "1:42443487142:web:3b2bb98a2177be937a8167",
  measurementId: "G-Y5RRBWFYB8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);