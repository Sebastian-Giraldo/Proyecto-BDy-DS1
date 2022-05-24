import React, { Fragment } from 'react';
import '../Estilos.css';
import firebaseApp from '../../../firebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const auth = getAuth(firebaseApp);

function NavBarC() {
  return (
    <Fragment>
      <nav className="containerf2 bg-dark">
        <br /><br /><br /><br />
        <br /><br /><br />
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li className="uk-active bg-light">
            <a href="">
              <span className="uk-margin-small-right" uk-icon="icon: home">
              </span>Home</a></li>
              <br /><br />
          <li className="uk-parent">
            <span href="#">Funcionalidades</span>
            <ul className="uk-nav-sub active">
              <li><a href="#" ><span className="uk-margin-small-right" uk-icon="icon: database"/>Check Out</a></li>
            </ul>
          </li>
          <br /><br /><br /><br />
          <li className="uk-nav-divider bg-light"></li>
          <li><Link to="/" onClick={() => signOut(auth)}><span className="uk-margin-small-right" uk-icon="icon: sign-out"></span> Cerrar Sesion</Link></li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default NavBarC