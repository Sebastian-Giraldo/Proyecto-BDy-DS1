
import React, { Fragment, useState } from "react";
import './Login.css';
import firebaseApp from "../../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set } from 'firebase/database';


const auth = getAuth(firebaseApp);
//const database = getDatabase(firebaseApp);
function Login() {

  const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);



  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    //console.log(infoUsuario.user.uid);
    const docuRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol })

    const db = getDatabase();
    set(ref(db, `usuarios/${infoUsuario.user.uid}`), {
      correo: email,
      rol: rol
    });

  }


  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    //console.log(rol);

    if (isRegistrando) {
      /**
       * * REGISTRAR;
       */
      registrarUsuario(email, password, rol);
    } else {

      /**
      * *LOGIN;
      */
      signInWithEmailAndPassword(auth, email, password);
    }
  }
  return (
    <Fragment>
      <div className="fondo font-monospace">
        <div className="container-fluid containerf w-25">
          <h1 className="p-3">{isRegistrando ? 'Registrate' : 'Inicia sesion'}</h1>
          <form className="p-3" onSubmit={submitHandler} >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nunca comparta su correo y/o contraseña</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite su correo electronico" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Digite su contraseña" />
            </div>
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" id="rol">
                <option value="administrador">Administrador</option>
                <option value="recepcionista">Recepcionista</option>
                <option value="cajero">Cajero</option>
                <option value="gerente">Gerente</option>
              </select>
            </div>
            <input type="submit" className="btn btn-outline-dark border-dark border-2" value={isRegistrando ? 'Registrarse' : 'Iniciar sesion'}>
            </input>
          </form>
          <button type="submit" className="btn btn-outline-dark border-dark border-2" onClick={() => setIsRegistrando(!isRegistrando)}>
            {isRegistrando ? 'Ya tengo una cuenta' : 'Quiero registrame'}
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Login;