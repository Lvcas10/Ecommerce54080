import { Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import { addDoc, getFirestore, collection } from "firebase/firestore"
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name: "",
    phone: "",
    email: ""
}


export const Cart = () => {
    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem } = useContext (CartContext);

    const total = () =>
        items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    

    const handleChange = (ev) => {
        setValues((prev) => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    }

    const handleSubmit = () => {
        const order = {
            buyer: values,
            items,
            total: total(),
        };
        console.log(order)

        const db = getFirestore();
        const orderCollection = collection (db, "orders");

        addDoc (orderCollection, order).then (({id}) =>{
            if (id) {
                toast.success("Su Orden: " + id + " ha sido completada!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }) 
        .finally(() => {clear();
            setValues(initialValues);
        }); 
    }

    const handleRemove = (id) => removeItem(id);
    const handleClear = () => clear();

    return (
        <Container className="mt-4 p-4 shadow-lg rounded" style={{ width: '20rem', backgroundColor: "#f8f9fa" }}>
        <h1 className="text-center mb-4 text-primary">Productos</h1>
        {items.map((i) => (
            <ul key={i.title} className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Producto: {i.title}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Cant: {i.quantity}</li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Precio: ${i.price}
                    <button className="btn btn-danger btn-sm" onClick={() => handleRemove(i.id)}>X</button>
                </li>
            </ul>
        ))}
        <div className="mb-3">
            <strong>Total:</strong> ${total()}
        </div>
        <button className="btn btn-warning btn-block mb-3" onClick={handleClear}>Limpiar</button>
        {items?.length > 0 && (
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" value={values.name} name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={values.email} name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="number" className="form-control" value={values.phone} name="phone" onChange={handleChange} />
                </div>
                <button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>Enviar</button>
            </form>
        )}
        <ToastContainer />
    </Container>
);
}