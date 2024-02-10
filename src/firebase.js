// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGBHBWXdMsRyNEDMPqOzjcse8iGWps9R4",
  authDomain: "planit-2e1fd.firebaseapp.com",
  projectId: "planit-2e1fd",
  storageBucket: "planit-2e1fd.appspot.com",
  messagingSenderId: "1001033539744",
  appId: "1:1001033539744:web:9444329ea1f5ce8ea1a9c5",
  measurementId: "G-S4QVV7NBX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
