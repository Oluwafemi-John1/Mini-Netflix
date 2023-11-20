import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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
const githubProvider = new GithubAuthProvider();

const gBut = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            let user = result.user
            console.log(user);
        })
        .catch((err) => {
            let errorCode = err.code
            let errorMsg = err.message
            console.log(errorCode, errorMsg);
        })
}
window.gBut = gBut

document.getElementById("gitBut").addEventListener('click', () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            let user = result.user
            console.log(user);
        })
        .catch((err) => {
            let errorCode = err.code
            let errorMsg = err.message
            console.log(errorCode, errorMsg);
        })
})


// Sign Up page //
const signUp = () => {
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    let fname = document.getElementById('firstname').value
    let lname = document.getElementById('lastname').value

    if (email != "" && pass != "" && fname != "" && lname != "") {
        createUserWithEmailAndPassword(auth, email, pass, fname, lname)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(errorCode);
                if (errorCode == "auth/operation-not-allowed") {
                    emptyError.textContent = "An account already exist with this email address";
                    emptyError.style.color = "orange"
                    setTimeout(() => {
                        emptyError.style.display = "none"
                    }, 3000)
                }
            })
    } else {
        emptyError.textContent = "Please fill in the empty spaces provided";
        emptyError.style.color = "red"
        setTimeout(() => {
            emptyError.style.display = "none"
        }, 3000)
    }

}
window.signUp = signUp