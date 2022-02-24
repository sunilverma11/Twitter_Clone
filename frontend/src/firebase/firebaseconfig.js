import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKXdMWU8T1h44D1YSkSOjOGiqZqzbh5KE",
  authDomain: "twitter-clone-react-da415.firebaseapp.com",
  projectId: "twitter-clone-react-da415",
  storageBucket: "twitter-clone-react-da415.appspot.com",
  messagingSenderId: "26801675345",
  appId: "1:26801675345:web:d68abdb0ec9e4a66562c70"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const storage = getStorage();

