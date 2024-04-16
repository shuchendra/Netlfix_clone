import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmEL3cFVS8L9jDvDyp1r1ojtnbW5pkW3M",
  authDomain: "netflix-clone-3f3d8.firebaseapp.com",
  projectId: "netflix-clone-3f3d8",
  storageBucket: "netflix-clone-3f3d8.appspot.com",
  messagingSenderId: "637428440721",
  appId: "1:637428440721:web:8ffaeacb851f6d51f92930",
  measurementId: "G-LB9JQG5ZDP"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
