// js
// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// third
import 'todomvc-app-css/index.css'
// own
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
