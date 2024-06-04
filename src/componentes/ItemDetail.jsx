import React from 'react'

export const ItemDetail = ( {producto} ) => {
  return (
    <div className='card-details'>
      <div className='card-div-1'>
        <img className='imagen' src={producto.imagen} />
        <p className='letra'>${producto.precio}</p>
      </div>
      <div className='card-div-2'>
        <h4 className='letra'>{producto.nombre}</h4>
        <p className='letra'>{producto.descripcion}</p>
      </div>
    </div>
  )
}
