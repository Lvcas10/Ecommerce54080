import { Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { addDoc, getFirestore, collection } from "firebase/firestore"

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
                alert("Su Orden:" + id + "ha sido completada!");
            }
        }) 
        .finally(() => {clear();
            setValues(initialValues);
        }); 
    }

    const handleRemove = (id) => removeItem(id);
    const handleClear = () => clear();

    return (
    <Container className="mt-4">
        <h1>Productos</h1>
        {items.map((i) => {
            return (
            <ul key={i.title}>
                <li>Producto {i.title}</li>
                <li>Cant: {i.quantity}</li>
                <li>$ {i.price}</li>
                <li onClick={() => handleRemove(i.id)}>X</li>
            </ul>
        );
        })}
        <div>Total: {total()}</div>
        <button onClick={handleClear}>Limpiar</button>
        {items?.length > 0 && <form>
            <label>Nombre</label>
            <input type="text" value={values.name} name="name" onChange={handleChange}/>
            <label>Email</label>
            <input type="email" value={values.email} name="email" onChange={handleChange}/>
            <label>Telefono</label>
            <input type="number" value={values.phone} name="phone" onChange={handleChange}/>
            <button type="button" onClick={handleSubmit}>Enviar</button>
        </form> }
    </Container>
);
}