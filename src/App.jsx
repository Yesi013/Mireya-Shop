import ItemListContainer from './componentes/ItemListContainer'
import Header from './componentes/Header/Header'
import "./css/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element= {<ItemListContainer />} />
      <Route path='/category/:categoryId' element= {<ItemListContainer />} />
      <Route path='/item/:itemId' element= {<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App