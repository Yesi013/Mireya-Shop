import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContex } from '../context/CartContex';

export const Item = ( {producto} ) => {

  const { agregarAlCarrito } = useContext (CartContex);

  return (
<div className='card'>
    <img className='imagen' src={producto.imagen} />
    <h4 className='letra'>{producto.nombre}</h4>
    <p className='letra'>${producto.precio}</p>
    {/* <p className='letra'>{producto.descripcion}</p> */}
    <Link to={`/item/${producto.id}`} className='link link-size'>Ver más</Link>
    <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
</div>
  )
}
