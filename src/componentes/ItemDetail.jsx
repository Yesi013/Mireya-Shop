import React, { useContext } from 'react'
import { CartContex } from '../context/CartContex'

export const ItemDetail = ( {producto} ) => {

    const { agregarAlCarrito } = useContext (CartContex);


  return (
    <div className='card-details'>
      <div className='card-div-1'>
        <img className='imagen' src={producto.imagen} />
        <p className='letra'>${producto.precio}</p>
      </div>
      <div className='card-div-2'>
        <h4 className='letra'>{producto.nombre}</h4>
        <p className='letra'>{producto.descripcion}</p>
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
      </div>
    </div>
  )
}
