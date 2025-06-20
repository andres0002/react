// js
// react
// third
// own
import './App.css';
import { products } from './mocks/products.json';
import { Products } from './components/Products/Products';
import { Header } from './components/Header';
import { IS_DEVELOPMENT } from '../config';
import { Footer } from './components/Footer/Footer';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/cart';

export function App() {
  const {filterProducts} = useFilters();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      {
        IS_DEVELOPMENT && <Footer />
      }
    </CartProvider>
  )
}
