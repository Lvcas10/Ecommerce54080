import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import data from "../data/products.json"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([null]);
    const {id} = useParams();

    useEffect (() => {
        const get = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        })
        get.then ((data) => {
            const filter = data.find ((p) => p.id === Number(id))
            setProduct(filter);
        });
    }, [id]);

    if (!product) return <div>Loading</div>;
    return <Container className='mt-4'>
        <h3>{product.name}</h3>
        <img src={product.pictureUrl} alt={product.description}/>
    </Container>;
};
