import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'



import Navbar from './components/Navbar'
import Shop from './pages/Shop.jsx'


function App() {
  return (
   //CartProvider  همه مقادیر زیر در زیر مجموعه کارت پروایدر قرار بگیرد 
    
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop />} />
        </Routes>
      </Container>
   
  )
}

export default App
