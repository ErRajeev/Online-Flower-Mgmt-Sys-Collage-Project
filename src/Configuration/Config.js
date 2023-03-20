import React from "react";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeQxZ8fiTORSKhrJKK4-U68tsP1hm3Mxc",
  authDomain: "online-be095.firebaseapp.com",
  projectId: "online-be095",
  storageBucket: "online-be095.appspot.com",
  messagingSenderId: "247457565752",
  appId: "1:247457565752:web:9b70b751eb1d85773b6acd",
  measurementId: "G-BPYLK1LS4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);