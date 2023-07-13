// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFzrEB05IQJX-0jTmAObHCkef00flOtdU",
  authDomain: "fir-1b8dc.firebaseapp.com",
  projectId: "fir-1b8dc",
  storageBucket: "fir-1b8dc.appspot.com",
  messagingSenderId: "255099709017",
  appId: "1:255099709017:web:edaa7aff65c63b4d94f348",
  measurementId: "G-3CDGKP3CSK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const db =app.firestore();
// const analytics = getAnalytics(app);

export {auth,db};