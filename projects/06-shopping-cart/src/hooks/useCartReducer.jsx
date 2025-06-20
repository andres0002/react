// js
// react
import { useReducer } from "react";
// third
// own
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from "../reducers/cartReducer";

export function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = product => dispatch({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
    });

    const removeFromCart = product => dispatch({
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: product
    });

    const clearCart = () => dispatch({
        type: CART_ACTION_TYPES.CLEAR_CART,
        payload: []
    });

    return {state, addToCart, removeFromCart, clearCart};
}
