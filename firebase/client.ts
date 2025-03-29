import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAxmAc4M5FtUUDBsnCcKpy0ST7lwD4P_4",
  authDomain: "theinterboo.firebaseapp.com",
  projectId: "theinterboo",
  storageBucket: "theinterboo.firebasestorage.app",
  messagingSenderId: "1019608039381",
  appId: "1:1019608039381:web:06e9433fe867185133475c",
  measurementId: "G-W1CTJ8GK7G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);