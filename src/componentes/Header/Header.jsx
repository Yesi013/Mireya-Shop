import { Link } from "react-router-dom"
import CardWidget from "./CardWidget"
import NavBar from "./NavBar"

const Header = () => {
  return (
  <header className="menu-principal">
    <Link to= "/" className="logo" ><h1>Mireya Shop</h1></Link>
    <NavBar />
    <CardWidget />
  </header>
  )
}

export default Header