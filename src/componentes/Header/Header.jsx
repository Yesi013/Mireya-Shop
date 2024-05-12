import Carrito from "./Carrito"
import Nav from "./Nav"

const Header = () => {
  return (
  <header className="menu-principal">
    <h1 className="logo">Mireya Shop</h1>
    <Nav />
    <Carrito />
  </header>
  )
}

export default Header