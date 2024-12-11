import {db} from './firebase.js'
import { collection, addDoc } from 'firebase/firestore';

export async function addNewPet(petData) {
    try {
      const petCollection = collection(db, "DonatedPet"); // Reference the "pet" collection
      const docRef = await addDoc(petCollection, petData); // Add the document to the collection
      return { success: true, id: docRef.id }; // Return success and document ID
    } catch (error) {
      console.error("Error adding new pet:", error);
      return { success: false, error: error.message }; // Handle errors gracefully
    }
  }