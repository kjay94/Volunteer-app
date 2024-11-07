// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Optional: if you're using Firestore
import { getStorage } from "firebase/storage"; // Optional: if you're using Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKATUzzlMgKHz0UliJhn_pHJKwAlYABhA",
  authDomain: "givs-10fd5.firebaseapp.com",
  projectId: "givs-10fd5",
  storageBucket: "givs-10fd5.appspot.com",
  messagingSenderId: "345179509540",
  appId: "1:345179509540:web:efdba050e949d3fbf799b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Optional: if you're using Firestore
export const storage = getStorage(app); // Optional: if you're using Firebase Storage
