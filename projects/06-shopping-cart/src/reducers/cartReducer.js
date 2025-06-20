// js
// react
// third
// own

export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const updateLocalStorage = ({state, removeItem=false}) => {
    if (removeItem) {
        return localStorage.removeItem('cart');
    }
    return localStorage.setItem('cart', JSON.stringify(state));
}

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: ({state, action}) => {
        // Check if the product is already in the cart.
        const productInCartIndex = state.findIndex(prod => prod.id === action.payload.id);
        if (productInCartIndex >= 0) {
            const newState = structuredClone(state);
            newState[productInCartIndex].quantity += 1;
            updateLocalStorage({state: newState});
            return newState;
        }
        // product no in cart.
        const newState = [
            ...state,
            {
                ...action.payload, // product
                quantity: 1
            }
        ];
        updateLocalStorage({state: newState});
        return newState;
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: ({state, action}) => {
        // Check if the product is already in the cart.
        const productInCartIndex = state.findIndex(prod => prod.id === action.payload.id);
        if (productInCartIndex >= 0) {
            const newState = structuredClone(state);
            newState[productInCartIndex].quantity -= 1;
            if (newState[productInCartIndex].quantity === 0) {
                // delete product list if quantity is 0.
                newState.splice(productInCartIndex, 1);
            }
            updateLocalStorage({state: newState});
            return newState;
        }
        updateLocalStorage({state});
        return state;
    },
    [CART_ACTION_TYPES.CLEAR_CART]: ({action}) => {
        const newState = action.payload;
        updateLocalStorage({state: newState, removeItem: true});
        return newState;
    }
}

export const cartReducer = (state, action) => {
    const updateState = UPDATE_STATE_BY_ACTION[action.type];
    return updateState
        ? updateState({state, action})
        : state;
}