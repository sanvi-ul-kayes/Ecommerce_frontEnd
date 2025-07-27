// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmbyAGJjRhmUJ1E-Ru7U-SGibpaFZ6-Rc",
  authDomain: "practice-47451.firebaseapp.com",
  projectId: "practice-47451",
  storageBucket: "practice-47451.firebasestorage.app",
  messagingSenderId: "845657782752",
  appId: "1:845657782752:web:50ad6c1b65a7c8bdf31385",
  measurementId: "G-55WQDJEYM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
