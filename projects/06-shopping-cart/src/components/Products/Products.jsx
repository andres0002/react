// js
// react
// third
// own
import './products.css';
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons.jsx';
import { useCart } from '../../hooks/useCart.jsx';

export function Products ({products}) {
    const {cart, addToCart, removeFromCart} = useCart();

    const checkProductInCart = product => {
        return cart.some(prod => prod.id === product.id);
    }

    return (
        <main className='products'>
            <ul>
                {
                    // products.slice(0, 10).map(product => {
                    products.map(product => {
                        const isProductInCart = checkProductInCart(product);
                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button style={{
                                        backgroundColor: isProductInCart
                                            ? '#f00'
                                            : ''
                                        }} onClick={() =>
                                            isProductInCart
                                                ? removeFromCart(product)
                                                : addToCart(product)
                                        }
                                    >
                                        {
                                            isProductInCart
                                                ? <RemoveFromCartIcon />
                                                : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}