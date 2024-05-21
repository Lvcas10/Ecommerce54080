import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success(`Se han agregado ${count} producto(s) al carrito`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <div 
                onClick={handleDecrease} 
                className="btn btn-outline-secondary px-3"
                style={{ cursor: 'pointer' }}
            >
                -
            </div>
            <input 
                type="number" 
                value={count} 
                readOnly 
                className="form-control text-center mx-2" 
                style={{ width: '4rem' }} 
            />
            <div 
                onClick={handleIncrease} 
                className="btn btn-outline-secondary px-3" 
                style={{ cursor: 'pointer' }}
            >
                +
            </div>
            <button 
                type="button" 
                onClick={handleAdd} 
                className="btn btn-primary ml-3"
            >
                Agregar al Carrito
            </button>
            <ToastContainer />
        </div>
    );
};