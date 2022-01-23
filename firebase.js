import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDmgTbh0xrjp1BafyIrrioCJFd9JULEP6I",
  authDomain: "twitter-clone-f302e.firebaseapp.com",
  projectId: "twitter-clone-f302e",
  storageBucket: "twitter-clone-f302e.appspot.com",
  messagingSenderId: "145051368299",
  appId: "1:145051368299:web:bc11384c8ea798fb346a2e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };