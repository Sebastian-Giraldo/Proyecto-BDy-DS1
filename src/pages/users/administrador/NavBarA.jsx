import { React, Fragment } from 'react';
import firebaseApp from '../../../firebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';
import '../Estilos.css'
import Inicio from '../../Inicio';
import { Link } from 'react-router-dom';
import HabitacionesA from './HabitacionesA';

const auth = getAuth(firebaseApp);

function NavBar() {
    return (
        <Fragment>
            <nav className="containerf2 bg-dark">
                <br /><br /><br /><br />
                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li className="uk-active bg-light">
                        <a href="#">
                            <span className="uk-margin-small-right" uk-icon="icon: home">
                            </span>Home</a></li>
                    <li className="uk-parent">
                        <span href="#">Funcionalidades</span>
                        <ul className="uk-nav-sub">
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Reservas</a></li>
                            <li><a href="#">Ingresos</a></li>
                            <li><Link to={<HabitacionesA/>}>Habitaciones</Link></li>
                        </ul>
                    </li>
                    <li className="uk-nav-header bg-light">Gestionar perfiles</li>
                    <li>
                        <a href="#"><span className="uk-margin-small-right" uk-icon="icon: user"></span>Cajero</a>
                        <div uk-dropdown="pos: right-center">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="uk-nav-header">Header</li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="uk-nav-divider"></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span className="uk-margin-small-right" uk-icon="icon: user"></span>Gerente</a>
                        <div uk-dropdown="pos: right-center">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="uk-nav-header">Header</li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="uk-nav-divider"></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span className="uk-margin-small-right" uk-icon="icon: user"></span>Recepcionista</a>
                        <div uk-dropdown="pos: right-center">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="uk-nav-header">Header</li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="uk-nav-divider"></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="uk-nav-divider bg-light"></li>
                    <li><Link to="/" onClick={() => signOut(auth)}><span className="uk-margin-small-right" uk-icon="icon: sign-out"></span> Cerrar Sesion</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar