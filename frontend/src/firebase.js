import { initializeApp } from "firebase/app";
import { getAnalytics , getGoogleAnalyticsClientId } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9UbGjKPg4KbGOYX5ETRGRAkcOavU4ad0",
  authDomain: "aol-se-1bcc3.firebaseapp.com",
  projectId: "aol-se-1bcc3",
  storageBucket: "aol-se-1bcc3.appspot.com",
  messagingSenderId: "42443487142",
  appId: "1:42443487142:web:3b2bb98a2177be937a8167",
  measurementId: "G-Y5RRBWFYB8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
export {auth, provider}