import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContex } from "../context/CartContex";


export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContex);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <div className="agradecimiento">
                <h1 className="title-finalizar">¡Qué disfrutes tu compra!</h1>
                <p className="id">Podes hacer el seguimiento de tu compra a través de este ID: {docId}</p>
            </div>
        )
    }

  return (
    <div>
        <form className="form" onSubmit={handleSubmit(comprar)}>
            <input className="datos" type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input className="datos" type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input className="datos" type="number" placeholder="Ingrese su teléfono" {...register("teléfono")} />
            <button className="modificar-button comprar" type="submit">Comprar</button>
        </form>
    </div>
  )
}