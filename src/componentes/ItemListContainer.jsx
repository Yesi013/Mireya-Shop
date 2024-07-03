import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState ("Inicio");


  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

    const categoriasRef = collection(db, "categorias");
    let catQuery = categoryId && query(categoriasRef, where("id", "==", categoryId));

    getDocs(q) 
      .then((res) => {
        setProductos (
          res.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
      });
      if (catQuery) {
        getDocs (catQuery)
        .then((res) => {
          setTitulo(res.docs[0].data().nombre);
        })
      } else {
        setTitulo("Productos");
      }

  }, [categoryId]);

  return (
    <div className="contenido">
      <h1 className="title">{titulo}</h1>
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer