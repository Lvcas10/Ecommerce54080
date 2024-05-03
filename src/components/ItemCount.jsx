import { useState } from "react";

export const ItemCount = ({onAdd, quantity}) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (quantity > count ) setCount((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (count > 1 ) setCount((prev) => prev - 1);
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    };

    return (
        <div className="d-flex">
        <div onClick={handleDecrease}>-</div>
        <input type="number" value={count} readOnly/>
        <div onClick={handleIncrease}>+</div>
        <button type="button" onClick={handleAdd}>Agregar al Carrito</button>
        </div>
    );
};