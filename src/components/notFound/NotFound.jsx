import React from 'react';
import Ayno from '../../assets/img/404.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
            <img src={Ayno} alt="" />
        <h2 className='not-found-title'>
                Página no encontrada: Error 404
        </h2>
        <p>Éste es un ejemplo de una página que redirige en caso de escribir una dirección no válida, o de tratar de buscar un recurso no implementado en el sitio web.
            ¿Intentó buscar una parte del sitio web que no estaba disponible?
        </p>
    </div>
  )
}

export default NotFound;