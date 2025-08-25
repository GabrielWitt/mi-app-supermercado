// src/services/firebase.ts
import { initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  User,
} from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

// Tipado explícito del config (opcional, Firebase ya lo infiere bien)
export const firebaseConfig = {
  apiKey: "AIzaSyBQBdW4K5Wz9XqThohOVkH46PRiF4HmsY4",
  authDomain: "food-planner-bb77b.firebaseapp.com",
  projectId: "food-planner-bb77b",
  storageBucket: "food-planner-bb77b.appspot.com",
  messagingSenderId: "76583902816",
  appId: "1:76583902816:web:efcdc2673e4d46605fad05",
  measurementId: "G-8JNLB0ZNRN"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtener instancia de Auth
const auth: Auth = getAuth(firebaseApp);
// Obtener instancia de Firestore
const db: Firestore = getFirestore(firebaseApp);

// Exportar auth y funciones tipadas
export {
  auth, db, onAuthStateChanged, signInAnonymously, type User
};

