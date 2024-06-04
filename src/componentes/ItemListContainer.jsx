import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import data from "../data/productos.json"
import categories from "../data/categorias.json"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState ("Inicio");

  const pedirProductos = () => {
    return new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }
  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo ("Inicio");
          setProductos (res);
        } else {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
        }
      })
  }, [categoryId]);
  return (
    <div className="contenido">
      <h1 className="title">{titulo}</h1>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer