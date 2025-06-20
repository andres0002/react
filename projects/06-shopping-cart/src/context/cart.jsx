// js
// react
import { createContext } from "react";
// third
// own
import { useCartReducer } from "../hooks/useCartReducer";

// 1. Craate the context, context a consumir.
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// 2 Create the provider, for proveer the context, el que nos provee de
//   acceso al context.
export function CartProvider ({children}) {
    const {state, addToCart, removeFromCart, clearCart} = useCartReducer();

    return (
        <CartContext.Provider value={{
                cart: state,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}