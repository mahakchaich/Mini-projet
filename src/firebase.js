import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import  "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjlWPbHMzYziEN4YsRqNFHF0B0F-Bt7GY",
    authDomain: "macinema-af780.firebaseapp.com",
    projectId: "macinema-af780",
    storageBucket: "macinema-af780.appspot.com",
    messagingSenderId: "367627102233",
    appId: "1:367627102233:web:46bb0e2640c76d712aa288"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export{auth,provider,storage};
export default db;