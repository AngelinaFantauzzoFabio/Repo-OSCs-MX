//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOoj1vzDuIu0mRRJSEq_Vi1OBUB1UZrXE",
  authDomain: "repo-oscs-mx.firebaseapp.com",
  projectId: "repo-oscs-mx",
  storageBucket: "repo-oscs-mx.appspot.com",
  messagingSenderId: "688179184840",
  appId: "1:688179184840:web:be30b8cb07c0d4746151fd",
  measurementId: "G-4FE6143N1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);