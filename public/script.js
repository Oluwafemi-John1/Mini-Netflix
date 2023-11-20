import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

// Google sign in //
const gBut = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            let user = result.user
            console.log(user);
            if (user) {
                window.location.href = "dashboard.html"
            }
        })
        .catch((err) => {
            let errorCode = err.code
            let errorMsg = err.message
            console.log(errorCode, errorMsg);
        })
}
window.gBut = gBut

// Github Sign in //
document.getElementById("gitBut").addEventListener('click', () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            let user = result.user
            console.log(user);
            if (user) {
                window.location.href = "dashboard.html"
            } else {
                window.location.href = "index.html"
            }
        })
        .catch((err) => {
            let errorCode = err.code
            let errorMsg = err.message
            console.log(errorCode, errorMsg);
            if (errorCode == "auth/account-exists-with-different-credential") {
                emptyError.style.display = "block"
                emptyError.textContent = "An account already exist with this email address";
                emptyError.style.color = "orange"
                setTimeout(() => {
                    emptyError.style.display = "none"
                }, 3000)
            }
        })
})


// Sign Up page //
const signUp = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let fname = document.getElementById('firstname').value
    let lname = document.getElementById('lastname').value

    if (email != "" && password != "" && fname != "" && lname != "") {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user);
                if (email == user.email) {
                    window.location.href = "index.html"
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode == "auth/email-already-in-use") {
                    emptyError.textContent = "An account already exist with this email address";
                    emptyError.style.color = "orange"
                    setTimeout(() => {
                        emptyError.style.display = "none"
                    }, 3000)
                }
                document.getElementById('email').value = ""
                document.getElementById('password').value = ""
                document.getElementById('firstname').value = ""
                document.getElementById('lastname').value = ""
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

// Sign In Page//
const signIn = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    if (email != "" && password != "") {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user);
                if (user) {
                    window.location.href = "dashboard.html"
                } else {
                    window.location.href = "index.html"
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode == "auth/invalid-login-credentials") {
                    emptyError.textContent = "Incorrect email or password";
                    emptyError.style.color = "orange"
                    setTimeout(() => {
                        emptyError.style.display = "none"
                    }, 3000)
                }
                document.getElementById('email').value = ""
                document.getElementById('password').value = ""
            })
    } else {
        emptyError.textContent = "Please fill in the empty spaces provided";
        emptyError.style.color = "red"
        setTimeout(() => {
            emptyError.style.display = "none"
        }, 3000)
    }
}
window.signIn = signIn