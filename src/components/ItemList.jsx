import { Item } from "./Item";

export const ItemList = ({products}) => {

    return (
        <div className="d-flex flex-wrap justify-content-between" style={{ marginBottom: '2px' }}>
        {products.map ((product) => (
            <Item key={product.id} product = {product} />
        ))}
        </div>
    )
}