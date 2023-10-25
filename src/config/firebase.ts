import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxZ6O54voQ0CqOgw8gha9DnaB55Yz3iUQ",
  authDomain: "lista-experience-day.firebaseapp.com",
  projectId: "lista-experience-day",
  storageBucket: "lista-experience-day.appspot.com",
  messagingSenderId: "698439046098",
  appId: "1:698439046098:web:7fc6a08c1ae8ac29bd6e0b"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

const storage = getStorage(app)

export { db, storage };