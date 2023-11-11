import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAFMap8P8XBHopSyopNmWAMUtNv_Z8ePSc",
  authDomain: "thevoid-95264.firebaseapp.com",
  projectId: "thevoid-95264",
  storageBucket: "thevoid-95264.appspot.com",
  messagingSenderId: "940301502859",
  appId: "1:940301502859:web:89e69800ae3df7deaac78e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)