// js
// react
import { useContext } from "react";
// third
// own
import { CartContext } from "../context/cart";

export function useCart () {
    const context = useContext(CartContext);

    if  ([undefined, null].includes(context)) {
        throw new Error("useCart must be used within a CartProvider");
    }

    const {cart, addToCart, removeFromCart, clearCart} = context;

    return {cart, addToCart, removeFromCart, clearCart};
}