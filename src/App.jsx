import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import {CartProvider} from './context/CartContext'

import Navbar from './components/Navbar'
import Shop from './pages/Shop'


function App() {
  return (
   //CartProvider  همه مقادیر زیر در زیر مجموعه کارت پروایدر قرار بگیرد 
    <CartProvider> 
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop />} />
        </Routes>
      </Container>
      </CartProvider> 
  )
}

export default App
