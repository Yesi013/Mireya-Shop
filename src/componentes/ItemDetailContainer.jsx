import React, { useEffect, useState } from 'react'
import data from "../data/productos.json"
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    let { itemId } = useParams();
    let [producto, setProducto] = useState ();

    useEffect(() => {
        setProducto(data.find ((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div className='contenido-detalles'>
     {producto && <ItemDetail producto = {producto}/>}
    </div>
  )
}
