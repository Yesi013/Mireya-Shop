import ItemListContainer from './componentes/ItemListContainer'
import Header from './componentes/Header/Header'
import "./css/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer'
import Carrito from './componentes/Header/Carrito'
import { CartProvider } from './context/CartContex'
import { Checkout } from './componentes/Checkout'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element= {<ItemListContainer />} />
        <Route path='/category/:categoryId' element= {<ItemListContainer />} />
        <Route path='/item/:itemId' element= {<ItemDetailContainer />} />
        <Route path='/carrito' element= {<Carrito />} />
        <Route path="/finalizar-compra" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App