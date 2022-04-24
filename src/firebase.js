import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import  "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBx-Vbj7hIEpvY1R6Q4kq-Q_SvV1vgATGk",
    authDomain: "linked-in-20ccd.firebaseapp.com",
    projectId: "linked-in-20ccd",
    storageBucket: "linked-in-20ccd.appspot.com",
    messagingSenderId: "1035730153470",
    appId: "1:1035730153470:web:9f35beba447d6ec1545aaf"
  };


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export{auth,provider,storage};
export default db;