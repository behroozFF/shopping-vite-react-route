import { Routes, Route  } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Navbar from "./components/Navbar.jsx"
import Shop from './pages/Shop.jsx'


function App() {

  return(
    <Container>
       <Navbar></Navbar> 
      <Routes>
          {/* index */}
        <Route path='/' element={<Shop />}/>
      </Routes>
    </Container>
  )
}

export default App
