import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCp08s6WLnYSv_xqueNKPW4uLntWr3MgQ",
  authDomain: "loginrota.firebaseapp.com",
  projectId: "loginrota",
  storageBucket: "loginrota.firebasestorage.app",
  messagingSenderId: "369813807077",
  appId: "1:369813807077:web:4e5044da0ac83fb33f590c",
  measurementId: "G-18DGGHHK5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

// Função para login com Google
async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
    } catch (error) { 
        throw error;
    }
}

// funçao para logut
async function logout() {
    await signOut(auth);
}

export { auth, signInWithGooglePopup, logout };