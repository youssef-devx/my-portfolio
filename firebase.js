import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0fMuXKA4mtYptJhEgMd5NTMVDkkCl4wM",
  authDomain: "portfolio-68090.firebaseapp.com",
  projectId: "portfolio-68090",
  storageBucket: "portfolio-68090.appspot.com",
  messagingSenderId: "604822024827",
  appId: "1:604822024827:web:4b0568aa752b3f1db968de",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)