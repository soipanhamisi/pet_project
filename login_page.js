import express from 'express'
import { getAuth, signInWithEmailAndPassword } from "./node_modules/firebase/auth";

// Add event listener for form submission
const form = document.getElementById('loginForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = req.body.email;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    const auth = getAuth();

    try {
        // Sign in the user using Firebase authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Redirect to homepage after successful login
        window.location.href = '/';
    } catch (error) {
        const errorCode = error.code;

        // Handle errors based on error code
        if (errorCode === 'auth/wrong-password') {
            alert('Incorrect password. Please try again.');
        } else if (errorCode === 'auth/user-not-found') {
            alert('User not found. Please check your email or create an account.');
        } else {
            alert('An error occurred. Please try again later.');
        }
    }
});
