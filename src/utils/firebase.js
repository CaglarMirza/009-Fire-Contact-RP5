import { initializeApp } from "firebase/app"

const firebaseConfig = {
  // apiKey: "AIzaSyAKQF362T8z-VtnlvjQJ736SWEOfxA4uoQ",
  // authDomain: "fire-contact-904c7.firebaseapp.com",
  // databaseURL: "https://fire-contact-904c7-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "fire-contact-904c7",
  // storageBucket: "fire-contact-904c7.appspot.com",
  // messagingSenderId: "1021669066827",
  // appId: "1:1021669066827:web:6e5a513182cb15513d65ce"



  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebase = initializeApp(firebaseConfig)
export default firebase;