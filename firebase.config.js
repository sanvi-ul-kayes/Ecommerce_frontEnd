// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDM5C7RYQ3ZANzn39BR2iL7NKk0O8Z4SE",
  authDomain: "chatapp-19173.firebaseapp.com",
  projectId: "chatapp-19173",
  storageBucket: "chatapp-19173.firebasestorage.app",
  messagingSenderId: "292933698029",
  appId: "1:292933698029:web:743838d7d016785b35a7e4",
  measurementId: "G-1NEY0W0LBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
