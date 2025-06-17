// js
// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// third
// own
import './index.css';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
