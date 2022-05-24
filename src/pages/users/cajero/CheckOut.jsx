import { React, useEffect, useState } from 'react'
import '../Estilos.css';
import { consultarCliente, actualizarDatosCliente, filtrarDatos } from '../../../firebase/ApiClientes';




function CheckOut() {

    const [cambiarEstado, setCambiarEstado] = useState('Sin Cancelar');
    const [arrayClientes, setArrayClientes] = useState(null);


    //Funcion para consultar clientes
    useEffect(() => {
        consultarDatos();
    }, [])


    const consultarDatos = async () => {
        const datosCliente = await consultarCliente()
        /*console.log(datosCliente.docs[0].data); */
        setArrayClientes(datosCliente.docs)
    }

    ///Funcion para actualizar datos

    /*  const actualizarPago = () => {
         setCambiarEstado(cambiarEstado == 'Cancelado' ? 'Sin Cancelar' : null);
     } */

    //Funcion para filtrar los clientes por su DNI O llave foranea

    async function busquedaFormHandler(e) { 
        e.preventDefault();
        const busqueda = e.busqueda.value;
        filtrarDatos(busqueda);
    }


    return (
        <div className='containerf3 fliud w-75 justify-content-center'>
            <br />
            <br />
            <h1>CheckOut Clientes</h1>
            <br />
            <form className="d-flex" role="search" onClick={busquedaFormHandler()}>
                <input id='busqueda' className="form-control me-2" type="search" placeholder="Buscar cliente por DNI" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit" >Search</button>
                <button className='btn btn-outline-danger mx-2'>Borrar</button>
            </form>
            <br />
            <br />
            <input className='d-flex form-control me-2' type="text" placeholder="ID cliente" />
            <br />
            <br />
            <table className="containerf4 table">
                <thead>
                    <tr scope="col">
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Habitacion</th>
                        <th>Reportes</th>
                        <th>Fecha de Ingreso</th>
                        <th>Fecha de Salida</th>
                        <th>Precio por noche</th>
                        <th>Cantidad de dias</th>
                        <th>Estado</th>
                        <th>Total a pagar</th>
                        <th>Realizar pago</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayClientes && arrayClientes.map(x => (
                            <tr className='text-center my-3'>
                                <td>{x.data().dni}</td>
                                <td>{x.data().nombre}</td>
                                <td>{x.data().apellido}</td>
                                <td>{x.data().habitacion}</td>
                                <td>{x.data().reportes}</td>
                                <td>{x.data().fecha_ingreso}</td>
                                <td>{x.data().fecha_salida}</td>
                                <td>{x.data().precio}</td>
                                <td>{x.data().dias_hospedaje}</td>
                                <td>{x.data().estado}</td>
                                <td>{x.data().total}</td>
                                <td>{cambiarEstado}</td>
                                <td>
                                    <button className='btn btn-outline-success'>Pagar</button>
                                    {/* <button className='btn btn-danger my-1'>Generar Reporte</button> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CheckOut