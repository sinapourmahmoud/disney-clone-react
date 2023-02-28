import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8cly2PCzReXcMxfgGzQjixGmWFb8VbQ8",
  authDomain: "dinsey-clone-10c88.firebaseapp.com",
  projectId: "dinsey-clone-10c88",
  storageBucket: "dinsey-clone-10c88.appspot.com",
  messagingSenderId: "83965870364",
  appId: "1:83965870364:web:e6720b0b8de78812d53ad9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);