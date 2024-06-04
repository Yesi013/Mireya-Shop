import { NavLink } from "react-router-dom";
import categories from "../../data/categorias.json";

const NavBar = () => {
  return (
    <>
    <nav className="nav">
        <ul className="menu">
        <li><NavLink to='' activeclassname= "active" className="link">Inicio</NavLink></li>
          {
            categories.map ((category) => {
              return (
              <li key= {category.id}><NavLink to={`/category/${category.id}`} activeclassname= "active" className="link">{category.nombre}</NavLink></li>
              )
            })
          }
        </ul>
    </nav>
    </>
  )
}

export default NavBar