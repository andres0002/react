// js
// react
import { createRoot } from 'react-dom/client';
// third
import { Provider } from 'react-redux';
// own
import './index.css';
import App from './App.tsx';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
