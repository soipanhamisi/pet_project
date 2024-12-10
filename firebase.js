// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGLUwS0uf-AO-QxuP5NyysrpS05T8QX9M",
  authDomain: "pet-store-551b9.firebaseapp.com",
  projectId: "pet-store-551b9",
  storageBucket: "pet-store-551b9.firebasestorage.app",
  messagingSenderId: "619347537253",
  appId: "1:619347537253:web:0b9734fbef05c51486c58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services for use in other files
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, addDoc, getDocs };

