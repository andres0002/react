// js
// react
import { useId } from "react"
// third
// own
import './cart.css';
import { CartIcon, ClearCartIcon, RemoveFromCartIcon, AddToCartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";

export function Cart () {
    const cartCheckboxId = useId();
    const {cart, addToCart, removeFromCart, clearCart} = useCart();

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                {
                    cart.length > 0
                        ? (
                            <>
                                <ul>
                                    {
                                        cart.map(product => {
                                            return (
                                                <li key={product.id}>
                                                    <img
                                                        src={product.thumbnail}
                                                        alt={product.title}
                                                    />
                                                    <div>
                                                        <strong>{product.title}</strong> - ${product.price * product.quantity}
                                                    </div>
                                                    <div>
                                                        <small>
                                                            Quantity: {product.quantity}
                                                        </small>
                                                    </div>
                                                    <footer>
                                                        <button onClick={() => addToCart(product)}>
                                                            <AddToCartIcon />
                                                        </button>
                                                        <button onClick={() => removeFromCart(product)}>
                                                            <RemoveFromCartIcon />
                                                        </button>
                                                    </footer>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <button onClick={() => clearCart()}>
                                    <ClearCartIcon />
                                </button>
                            </>
                        )
                        : <p className="no-products">No hay products en el cart.</p>
                }
                
            </aside>
        </>
    )
}