// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3vdrRMFyBFgS9NrrGvUW3KZYAG6nU2sE",
  authDomain: "nursing-care-acfa6.firebaseapp.com",
  projectId: "nursing-care-acfa6",
  storageBucket: "nursing-care-acfa6.appspot.com",
  messagingSenderId: "665605190698",
  appId: "1:665605190698:web:f06bfb8a4fa59cf81b3f53",
  measurementId: "G-QTQFGXW3XH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
