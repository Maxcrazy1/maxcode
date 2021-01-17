import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDMbWZxVL9eR55tylxPy1f0lwW6BwNxPC8",
  authDomain: "maxcode-1063f.firebaseapp.com",
  projectId: "maxcode-1063f",
  storageBucket: "maxcode-1063f.appspot.com",
  messagingSenderId: "311764813636",
  appId: "1:311764813636:web:73a9a0ea9be9ff6ed9f911",
  measurementId: "G-TGPQ3D9YEG",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); 
}

export default firebase.database();
