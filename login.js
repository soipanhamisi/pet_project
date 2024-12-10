import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase.js';

export async function signInUser(email, password) {
 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user; 
    } catch (error) {
      throw new Error(error.message); 
    }
  }