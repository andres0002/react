// js
// react
// third
// own
import './footer.css';
// import { useFilters } from '../../hooks/useFilters.jsx';
// import { useCart } from '../../hooks/useCart.jsx';


export function Footer () {
    // const {filters} = useFilters();
    // const {cart} = useCart();
    return (
        <footer className='footer'>
            {/* {
                JSON.stringify(filters,null,2)
            } */}
            {/* {
                JSON.stringify(cart,null,2)
            } */}
            <h4>Prueba Técnica of React</h4>
            <h5>Shopping Cart with <span>useContext and useReducer</span></h5>
        </footer>
    )
}