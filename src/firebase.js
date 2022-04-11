import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import  "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgwjxq7U3vsqtkWIT9NhMKQ6x85wuApwo",
  authDomain: "linkedin-clone-68604.firebaseapp.com",
  projectId: "linkedin-clone-68604",
  storageBucket: "linkedin-clone-68604.appspot.com",
  messagingSenderId: "407489252519",
  appId: "1:407489252519:web:4ad7bd4d5cc4cb22371f82"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export{auth,provider,storage};
export default db;