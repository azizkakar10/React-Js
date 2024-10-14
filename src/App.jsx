import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import SignUp from './pages/Auth/Signup'
import SignIn from './pages/Auth/Signin'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Carts from './pages/Carts'
import Orders from './pages/Orders'
import Home from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/auth'>
        <Route index element = {<Auth/>} />
        <Route path='signup' element ={<SignUp/>} />
        <Route path='signin' element ={<SignIn/>} />
      </Route>

      <Route path='/' element ={<Dashboard/>}>
        <Route index element ={<Home/>} />
        <Route path='/products' element ={<Products/>} />
        <Route path='/products/:id' element ={<ProductDetail/>} />
        <Route path='/cart' element ={<Carts/>} />
        <Route path='/orders' element ={<Orders/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
