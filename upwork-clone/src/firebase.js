// Import modular Firebase v9+ SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBYCGYP-tx6DJKgjd4cNPiYoOC3wNk1cwk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "final-project-react-12190.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "final-project-react-12190",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "final-project-react-12190.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1063777536149",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1063777536149:web:ac906c833922665c00739c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-8BVMCH1W3X"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Initialize auth providers
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

// Configure Google provider
googleProvider.addScope('profile');
googleProvider.addScope('email');
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Configure Apple provider
appleProvider.addScope('email');
appleProvider.addScope('name');

export { auth, db, storage, googleProvider, appleProvider };
export default firebaseApp;
