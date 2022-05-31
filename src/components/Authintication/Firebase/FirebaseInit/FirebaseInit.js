import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";
// import firebaseConfig from "../FirebaseConfig/FirebaseConfig"
const firebaseInit= ()=>{
    initializeApp(firebaseConfig)
}

export default firebaseInit