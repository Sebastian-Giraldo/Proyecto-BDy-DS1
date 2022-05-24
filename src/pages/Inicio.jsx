import React, { Fragment } from 'react';
import { useState } from 'react';
import Login from '../shared/login/Login';
import firebaseApp from '../firebase/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import Home from '../shared/home/Home';



const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function Inicio() {

  const [user, setUser] = useState(null);

  /**
   * It gets the role of a user from the database
   * @param uid - The user's unique ID.
   * @returns The role of the user.
   */
  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }


  /**
   * It sets the user with the data from firebase and the role.
   * @param usuarioFirebase - This is the user object that Firebase returns when the user is
   * authenticated.
   */
  function setUserWhithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.uid,
        rol: rol,
      };
      setUser(userData);
    })
  }

  /* A function that takes two parameters, `auth` and `usuarioFirebase`. It returns a function that
  takes a parameter `usuarioFirebase` and returns `usuarioFirebase` if `usuarioFirebase` is true. */
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final
      if (!user) {
        setUserWhithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  })

  return <>{user ? <Home user={user}/> : <Login />}</>

}

export default Inicio;
