// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqEwT1zhRo-XBMew_VAu6QBzw8hp1KAIk",
  authDomain: "task-manager-a6312.firebaseapp.com",
  projectId: "task-manager-a6312",
  storageBucket: "task-manager-a6312.firebasestorage.app",
  messagingSenderId: "839140222710",
  appId: "1:839140222710:web:7a4029dadde6a422246ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
