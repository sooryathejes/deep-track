import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLK7eXWdRyWwT7ExiOv5m9sY3tNwrpbPY",
  authDomain: "deep-track-839d3.firebaseapp.com",
  projectId: "deep-track-839d3",
  storageBucket: "deep-track-839d3.appspot.com", 
  messagingSenderId: "458181510984",
  appId: "1:458181510984:web:ea51d6f367b8e7bae9157d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  

export default app;
