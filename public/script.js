import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMqc7bv0ZOHam60zdaoZXMtHfNWXBwCRo",
  authDomain: "full-project-81848.firebaseapp.com",
  projectId: "full-project-81848",
  storageBucket: "full-project-81848.appspot.com",
  messagingSenderId: "950678778632",
  appId: "1:950678778632:web:ed95cea3d3f8eacc1132bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const gBut = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
        let user = result.user
        console.log(user);
    })
    .catch((err)=>{
        let errorCode = err.code
        let errorMsg = err.message
        console.log(errorCode, errorMsg);
    })
}
window.gBut = gBut

const gitBut = () => {
    
}
window.gitBut = gitBut