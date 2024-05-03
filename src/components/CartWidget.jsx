import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import cart from"../assets/cart.png"

export const CartWidget = () => {
    const {items} = useContext (CartContext);

    const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

    return (
        <Link to="/cart">
            <div id="cart-widget" className="">
                <img src={cart} alt="Cart" width={40}/>
                <span>{total}</span>
            </div>
        </Link>
    );
};