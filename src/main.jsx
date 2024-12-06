import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { Landing } from './pages/LandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
