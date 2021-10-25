// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { getAuth, signOut, updateProfile } from 'firebase/auth';

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
    where
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

export const auth = getAuth();

//Crear usuario con correo y contraseña
export const crearUsuarioCorreo = async (email, password, nombre) => {
    try {
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password)

        await updateProfile(auth.currentUser, {
            displayName: nombre
        })

        const user = {
            id: credencialesUsuario.user.uid,
            email: credencialesUsuario.user.email
        }

        return user
    } catch (error) {
        console.log(error.message);
        return 0
    }
}



const provider = new GoogleAuthProvider();



export const signUsuarioGoogle = async () => {
    try {

        signInWithRedirect(auth, provider)
        const result = await getRedirectResult(auth)
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

// export const signUsuarioGoogle = async () => {
//     try {
//         const result = await signInWithPopup(auth, provider)
//         // const credencialesGoogle = GoogleAuthProvider.credentialFromResult(result);
//         // const token = credencialesGoogle.accessToken;

//         return result.user
//     } catch (error) {

//         // Handle Errors here.
//         console.log(error.code);
//         console.log(error.message);
//         // The email of the user's account used.
//         console.log(error.email);
//         // The AuthCredential type that was used.
//         console.log(GoogleAuthProvider.credentialFromError(error));
//         return 0;
//     }

// }

export const signUsuarioCorreo = async (email, password, name) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)

        

        return result.user
    } catch (error) {

        // Handle Errors here.
        console.log(error);
        return 0

    }

}

export const SalirUsuario = async () => {
    await signOut(auth).then(() => {
        

    }).catch((error) => {
        console.log(error);
    })
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

// consulatar documento por campo

export const consultaPorItemDocumentos = async (nombreDatabase, campo, condition, argumento) => {
    try {
        const datos = [];
        const q = query(collection(database, nombreDatabase), where(campo, condition, argumento));
        const respuesta = await getDocs(q)
        respuesta.forEach((doc) => {
            datos.push({
                id: doc.id,
                ...doc.data()});
        })
        return datos

    } catch (error) {
        console.log(error);
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