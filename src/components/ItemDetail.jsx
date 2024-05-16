import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext);

    const add = (quantity) => {
        addItem(product, quantity)

    }

return (
    <Container className="mt-4 mb-3 p-4 shadow-sm rounded bg-light ">
            <h3 className="text-primary text-center">{product.title}</h3>
            <img src={product.pictureUrl} alt={product.description} fluid className="mb-3" />
            <h4 className="text-secondary">${product.description}</h4>
            <h5 className="text-success">${product.price}</h5>
            <h6 className="text-muted">Stock: {product.quantity}</h6>
            <ItemCount quantity={product.quantity} onAdd={add} />
        </Container>
);
};