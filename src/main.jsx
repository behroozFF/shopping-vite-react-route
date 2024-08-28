
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

// اضافه کردن react-bootstrap and  index.css
import 'bootstrap/dist/css/bootstrap.min.css'
// فایل های اصلی سی اس اس مون
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
  </React.StrictMode>
) 

