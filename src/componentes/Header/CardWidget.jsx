import { useContext } from "react"
import { BagHeartFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { CartContex } from "../../context/CartContex"

const CardWidget = () => {

  const { calcularCantidad } = useContext(CartContex);

  return (
    <Link className="carrito" to= "/carrito">
       <BagHeartFill /> {calcularCantidad()} 
    </Link>
  )
}

export default CardWidget