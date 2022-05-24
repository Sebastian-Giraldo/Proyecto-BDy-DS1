
import React from 'react';
import AdminView from '../../pages/users/administrador/AdminView';
import CajeroView from '../../pages/users/cajero/CajeroView';
import GerenteView from '../../pages/users/gerente/GerenteView';
import RecepView from '../../pages/users/recepcionista/RecepView';
import Login from '../login/Login';



function Home({ user }) {
    if (user.rol === 'administrador') {
        return <AdminView/>
    } else if (user.rol === 'gerente') {
        return <GerenteView/>
    } else if (user.rol === 'cajero') {
        return <CajeroView/>
    }else if (user.rol === 'recepcionista') {
        return <RecepView/>
    }
    else {
        return <Login />
    }
}

export default Home;