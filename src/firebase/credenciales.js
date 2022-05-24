/**
 * *Importamos la funcion para inicializar la app de firebase
 * */
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

/**
 * *Se agregan las credenciales
 */
const firebaseConfig = {
    apiKey: "AIzaSyB26hNLyBdNePFP7cJTH9eC0GMA1jR-NXQ",
    authDomain: "proyecto-myhotel.firebaseapp.com",
    projectId: "proyecto-myhotel",
    storageBucekt: "proyecto-myhotel.appspot.com",
    messaginSenderId: "877240273689",
    appId: "1:877240273689:web:c618621ee9fc81fb2c9388",
}


/**
 * *Inicializamos la aplicacion y la guardamos en firebase
 */
const firebaseApp = initializeApp(firebaseConfig);

/**
 * *Exportamos firebaseApp para poder utilizarla en cualquier lugar del proyecto
 */
export default firebaseApp;