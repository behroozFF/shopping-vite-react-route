
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

// اضافه کردن react-bootstrap and  index.css
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
  </StrictMode>,
) 

