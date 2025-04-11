import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration - update with your config from Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.AIzaSyBhDzhvIYm_ayEhSy9YtRvkeiXrajZH5q8,
  authDomain: `${import.meta.env.heoster-class-2024.firebaseapp.com}.firebaseapp.com`,
  projectId: import.meta.env.heoster-class-2024,
  storageBucket: `${import.meta.env.heoster-class-2024}.appspot.com`,
  appId: import.meta.env.1:832744733078:web:6f1ea8bdaf7acbce5e45b7,
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, auth, db, storage, provider };
