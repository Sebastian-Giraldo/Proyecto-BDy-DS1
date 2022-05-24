import React from 'react'
import { Link } from 'react-router-dom';
import imagenes from '../Imagenes/imagenes';

function Error() {
  return (
    <div className='container container-fluid text-center font-monospace'>
        <img src={imagenes[8].img} alt={imagenes[8].title} />
        <h3 className='text-center'>Ohh! Page not found</h3>
        <p className='text-center'>We can't seem to find the page you're looking  for</p>
        <Link to='/' className='btn btn-outline-dark text-center'>Back to Inicio</Link>
    </div>
  )
}

export default Error