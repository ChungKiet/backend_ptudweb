import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Initialize Firebase
const firebaseConfig = {
   apiKey: "AIzaSyCiEvSVHQGfVfb4T2DHLSpN9V-eDpnNUx8",
   authDomain: "final-web-backend.firebaseapp.com",
   projectId: "final-web-backend",
   storageBucket: "final-web-backend.appspot.com",
   messagingSenderId: "285112449919",
   appId: "1:285112449919:web:b5ec440e9497344e4cf84a",
   measurementId: "G-XYZJFW8GP1"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
