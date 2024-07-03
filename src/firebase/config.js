import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPyMs6l2OfGmR38Y-GeX-wra5oTO70Ibc",
  authDomain: "mireyashop-11eef.firebaseapp.com",
  projectId: "mireyashop-11eef",
  storageBucket: "mireyashop-11eef.appspot.com",
  messagingSenderId: "384687270492",
  appId: "1:384687270492:web:83392b1e8a54e587951499"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app); 