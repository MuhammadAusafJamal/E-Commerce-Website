import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import CartList from './components/cartList'
import Products from './components/ProductPage/productsPage'
import Cart from './components/CartPage/cartPage'
// import DeleteItem from './components/deleteItem'

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


