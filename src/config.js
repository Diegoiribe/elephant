// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCx0VSDUWKIqwTDL2to2T7l7DoIN7RzNtw',
  authDomain: 'api-elephant.firebaseapp.com',
  projectId: 'api-elephant',
  storageBucket: 'api-elephant.appspot.com',
  messagingSenderId: '236496641021',
  appId: '1:236496641021:web:0277a3fd66ecbfda9f1794'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
