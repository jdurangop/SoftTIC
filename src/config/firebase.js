// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIR8m6z7uhjaFvbjdZwm7pjZ9Z9voEC_U",
    authDomain: "softic-sm.firebaseapp.com",
    projectId: "softic-sm",
    storageBucket: "softic-sm.appspot.com",
    messagingSenderId: "591979680538",
    appId: "1:591979680538:web:a741f714dd118ff9e252a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

//Crear usuario con correo y contraseña
export const crearUsuarioCorreo = async (email, password) => {
    try {
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password)
        const user = {
            id: credencialesUsuario.user.uid,
            email: credencialesUsuario.user.email
        }

        return user
    } catch (error) {
        console.log(error);
    }
}

const provider = new GoogleAuthProvider();

export const crearUsuarioGoogle = async () => {
    console.log("credenciales");
    console.log(auth);
    try {
        const result = await signInWithPopup(auth, provider)
        const credencialesGoogle = GoogleAuthProvider.credentialFromResult(result);
        const token = credencialesGoogle.accessToken;

        console.log(result.user);
        console.log(auth);

        return result.user
    } catch (error) {

        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // The email of the user's account used.
        console.log(error.email);
        // The AuthCredential type that was used.
        console.log(GoogleAuthProvider.credentialFromError(error));
    }


}