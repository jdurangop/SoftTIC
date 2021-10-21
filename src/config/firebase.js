// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    query,
    doc,
    addDoc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";

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

//Crear usuario con correo y contraseña
export const crearUsuarioCorreo = async (auth, email, password) => {
    try {
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password)
        const user = {
            id: credencialesUsuario.user.uid,
            email: credencialesUsuario.user.email
        }

        return user
    } catch (error) {
        console.log(error);
        return 0
    }
}

const provider = new GoogleAuthProvider();

export const signUsuarioGoogle = async (auth) => {
    try {
        const result = await signInWithPopup(auth, provider)
        // const credencialesGoogle = GoogleAuthProvider.credentialFromResult(result);
        // const token = credencialesGoogle.accessToken;

        return result.user
    } catch (error) {

        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // The email of the user's account used.
        console.log(error.email);
        // The AuthCredential type that was used.
        console.log(GoogleAuthProvider.credentialFromError(error));
        return 0;
    }

}

export const signUsuarioCorreo = async (auth, email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        

        return result.user
    } catch (error) {

        // Handle Errors here.
        console.log(error);
        return 0
        
    }

}

// base de datos
const database = getFirestore();

// Guardar
export const guardarDatabase = async (nombreDatabase, data) => {
    try {
        const response = await addDoc(collection(database, nombreDatabase), data);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Consultar todos los documentos (Coleccion)
export const consultarDatabase = async (nombreDatabase) => {
    try {
        
        const response = await getDocs(query(collection(database, nombreDatabase)));
        const elementos = response.docs.map((doc) => {
            const document = {
                id: doc.id,
                ...doc.data(),
            };
            return document;
        });
        return elementos;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Consultar un documento
export const consultarDocumentoDatabase = async (nombreDatabase, id) => {
    try {
        const response = await getDoc(doc(database, nombreDatabase, id));
        const document = {
            id: response.id,
            ...response.data(),
        };
        return document;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Actualizar un documento
export const actualizarDocumentoDatabase = async (nombreDatabase, id, data) => {
    try {
        const response = await updateDoc(doc(database, nombreDatabase, id), data);
        console.log(response);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Eliminar un documento
export const eliminarDocumentoDatabase = async (nombreDatabase, id) => {
    try {
        const response = await deleteDoc(doc(database, nombreDatabase, id));
        console.log(response);
    } catch (error) {
        throw new Error(error.message);
    }
};