import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD1W15-8P6NqOPJl3x9KevrJhGOVDjlH1Q",
  authDomain: "react-scrimba-c910c.firebaseapp.com",
  projectId: "react-scrimba-c910c",
  storageBucket: "react-scrimba-c910c.appspot.com",
  messagingSenderId: "1080611457604",
  appId: "1:1080611457604:web:1efaf8243f265094ff8a11"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
