import React, { useEffect, useState } from 'react';
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
            <h1 className='text-center text-primary mt-2 mb-2'>All Services</h1>

            <div className='container'>
                <div className='row g-4'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;