import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const createUser = async (email, password) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('User created:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw new Error(error.message);
  }
};
