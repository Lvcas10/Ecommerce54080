import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({product}) => (
    <Card style={{ width: '18rem', display: 'flex', padding: '1rem', marginBottom: '20px', backgroundColor: "#fff" }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/item/${product.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="primary" className="mt-2">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
)

