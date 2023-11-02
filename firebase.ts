
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgK34Z6nQk03nNQ9t_DJWW3U2ajhtsO4I",
  authDomain: "badminton-project-2f670.firebaseapp.com",
  projectId: "badminton-project-2f670",
  storageBucket: "badminton-project-2f670.appspot.com",
  messagingSenderId: "659002917337",
  appId: "1:659002917337:web:f0da0a31c97e001af799c8",
  measurementId: "G-0HLCBT5YYC"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db =getFirestore(app)