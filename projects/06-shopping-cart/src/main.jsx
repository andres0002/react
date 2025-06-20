// js
// react
import { createRoot } from 'react-dom/client'
// third
// own
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
