import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAGLUwS0uf-AO-QxuP5NyysrpS05T8QX9M",
  authDomain: "pet-store-551b9.firebaseapp.com",
  projectId: "pet-store-551b9",
  storageBucket: "pet-store-551b9.firebasestorage.app",
  messagingSenderId: "619347537253",
  appId: "1:619347537253:web:0b9734fbef05c51486c58c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};

