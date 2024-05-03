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
    <Container className='mt-4' style={{ width: '24rem', display: 'flex', flexDirection: 'column'}} >
        <h3>{product.title}</h3>
        <img src={product.pictureUrl} alt={product.description}/>
        <h4>${product.description}</h4>
        <h5>${product.price}</h5>
        <h6>Stock: {product.quantity}</h6>
        <ItemCount quantity={product.quantity} onAdd={add} />
    </Container>
);
};