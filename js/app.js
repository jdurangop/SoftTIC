const firebaseConfig = {
    apiKey: "AIzaSyBMgjazIfjpBee064qIgvG9NXBRWPSjdG4",
    authDomain: "proyecto-scrum-fc8de.firebaseapp.com",
    projectId: "proyecto-scrum-fc8de",
    storageBucket: "proyecto-scrum-fc8de.appspot.com",
    messagingSenderId: "342946443569",
    appId: "1:342946443569:web:7f79028cb3b2fb54834010",
    measurementId: "G-512HM28N88"
  };
  
  // Initialize Firebase
//   initializeapp es un metodo de firebase
  const app = firebase.initializeApp(firebaseConfig);

//   se declaran las variables globales
// se declara las variable del metodo autenticacion
const auth = firebase.auth()

// se declara la variable de proveedor para autenticar con el correo de google
const proveedor = new firebase.auth.GoogleAuthProvider()

// se crea la constante para el uso de la base de datos
const database = firebase.firestore()

//  se crean dos variables para los usuarios
let usuarioActual;
let listaTareas = []

// se crean las variables DOM
// se crea una variable para el boton de ingreso con google
const btnLogin = document.getElementById('btn-login')
// const btnSingUp = document.getElementById('btn-signup')


// FUNCIONES

// funcion para registrarse
// se crea una funcion para que los datos del nuevo usuario se almacenen en la base de datos
async function signup(){
    const respuesta = await auth.signInWithPopup(proveedor)
    console.log(respuesta);

}

// funcion login
// se crea una funcion para activar la ventana emergente para logearse con gmal
async function login(){
    // al utilizar el metodo genera una promesa por lo tanto se utiliza el metodo de las promesas
    // propeidad para generar un cuadro pop para iniciar secion con google
    const respuesta = await auth.signInWithPopup(proveedor)
    console.log(respuesta.user.displayName);


}



// Se crean los diferentes eventos

// // evento para registrarse
// btnSingUp.addEventListener('click', (e)=>{
//     signup()
// })

// evento login
btnLogin.addEventListener('click', (e)=>{
    login()
    

})