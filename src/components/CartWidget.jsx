import cart from"../assets/cart.png"

export const CartWidget = () => {
    return (
        <div id="cart-widget" className="">
            <img src={cart} alt="Cart" width={40}/>
            <span>10</span>
        </div>
    );
};