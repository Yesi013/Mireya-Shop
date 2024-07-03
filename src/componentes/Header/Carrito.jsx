import React, {  Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NodeMinusFill, NodePlusFill, Trash3 } from 'react-bootstrap-icons';
import '../../css/main.css';
import { CartContex } from '../../context/CartContex';

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, incrementarProducto, decrementarProducto } = useContext(CartContex);
    const [showCartel, setShowCartel] = useState(false);
    const [productoAgregado, setProductoAgregado] = useState('');

    const handleIncrementarProducto = (producto) => {
        incrementarProducto(producto);
        setProductoAgregado(producto.nombre);
        setShowCartel(true);
        setTimeout(() => {
            setShowCartel(false);
        }, 2000);
    };

    const agruparProductos = () => {
        const uniqueProducts = Array.from(new Set(carrito.map(prod => prod.id)));
        return uniqueProducts.map(id => {
            const producto = carrito.find(prod => prod.id === id);
            const total = producto.cantidad * producto.precio;
            return {
                ...producto,
                total
            };
        });
    };

    return (
        <div className="carrito-container">
            {showCartel && (
                <div className="cartel-flotante">
                    {productoAgregado} se ha añadido al carrito
                </div>
            )}
            {agruparProductos().map((prod) => {
                return (
                    <Fragment key={prod.id}>
                        <div className="producto-container">
                            <h1 className="producto-precio">{prod.nombre} x {prod.cantidad}u: ${prod.total}</h1>
                            <img src={prod.imagen} alt={prod.nombre} className="producto-imagen" />
                            <div className="cantidad-modificar">
                                <button className="modificar-button" onClick={() => { eliminarProducto(prod) }}><Trash3 /></button>
                                <button className="modificar-button" onClick={() => { decrementarProducto(prod) }}><NodeMinusFill /></button>
                                <button className="modificar-button" onClick={() => { handleIncrementarProducto(prod) }}><NodePlusFill /></button>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
            {
                carrito.length > 0 ?
                    <>
                        <h2 className='totalPrice'>Total: <span className='totalAmount'>${calcularTotal()}</span></h2>
                        <div className="botonesCarrito">
                            <button className='modificar-button' onClick={vaciarCarrito}>Vaciar carrito</button>
                            <Link to="/finalizar-compra" className='modificar-button'>Finalizar compra</Link>
                        </div>
                    </> :
                    <h2 className='emptyCartMessage'>El carrito está vacio.</h2>
            }
        </div>
    )
}

export default Carrito;