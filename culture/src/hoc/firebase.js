import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MSG_SENDERID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseDb = firebaseApp.firestore;
const firebaseDb = firebaseApp.firestore();
const firebaseStorage = firebaseApp.storage();

export { firebaseApp, firebaseDb, firebaseStorage };
