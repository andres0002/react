// js
// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// third
// own
import './index.css'
import { App } from './App.jsx'

// punto de entrada.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)