import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


import Home from './shared/home/Home';
import Error from './pages/Error';
import Login from './shared/login/Login';
import GerenteView from './pages/users/gerente/GerenteView';
import AdminView from './pages/users/administrador/AdminView';
import RecepView from './pages/users/recepcionista/RecepView';
import CajeroView from './pages/users/cajero/CajeroView';
import Inicio from './pages/Inicio';
import HabitacionesA from './pages/users/administrador/HabitacionesA';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='*' element={<Error />} />
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/login' component={<Login />} />
        <Route exact path='/home' component={<Home />} />
        {/* Links del Administrador */}
        <Route exact path='/administrador' component={<AdminView />} />
        <Route exact path='/habitacionesA' component={<HabitacionesA/>}/>
        {/* Links del Gerente */}
        <Route exact path='/gerente' component={<GerenteView />} />
        {/* Links del Cajero */}
        <Route exact path='/cajero' component={<CajeroView />} />
        {/* Links del Recepcionista */}
        <Route exact path='/recepcionista' component={<RecepView />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
