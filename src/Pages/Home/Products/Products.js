import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <h1 className='text-center text-primary mt-2 mb-2'>Our Products</h1>

            <div className='container'>
                <div className='row g-4'>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='mt-3 mb-3 d-flex justify-content-center'>
                    <Button variant="outline-success">Manage All</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Products;