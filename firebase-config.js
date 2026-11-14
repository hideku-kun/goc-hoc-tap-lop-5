import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUNj7OSRhzxb7TQ979buDO8KX2r6dB12g",
  authDomain: "goc-hoc-tap-lop-5.firebaseapp.com",
  projectId: "goc-hoc-tap-lop-5",
  storageBucket: "goc-hoc-tap-lop-5.firebasestorage.app",
  messagingSenderId: "381412831614",
  appId: "1:381412831614:web:1e3034a3c31c784a51032f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);