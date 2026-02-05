import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  {Hi,Hello}from './App.jsx'
import Nivash from './assets/Thunder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Hi/>
    <Hello />
  </StrictMode>,
)
