// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL:"https://bivagon-final-668ce-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyCpo8kw8Q0xzqMLk7wvCIa-eCHIFhHGick",
  authDomain: "bivagon-final-668ce.firebaseapp.com",
  projectId: "bivagon-final-668ce",
  storageBucket: "bivagon-final-668ce.firebasestorage.app",
  messagingSenderId: "811535399173",
  appId: "1:811535399173:web:98a27ec89340f94eeb5f6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
 
export default db;