// Import modular Firebase v9+ SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoSwKDCRA94ty6mZ6C5tA2FJMWqcNYWY",
  authDomain: "peaceful-elf-466216-d4.firebaseapp.com",
  projectId: "peaceful-elf-466216-d4",
  storageBucket: "peaceful-elf-466216-d4.firebasestorage.app",
  messagingSenderId: "363527228167",
  appId: "1:363527228167:web:b4b7d60ba37b1a6433d3a2",
  measurementId: "G-7H2TEYXCTV"
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