import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import AllItems from '../AllItems/AllItems';

const ManageItems = () => {

    const [products] = useProducts();

    return (
        <div>
            <h1 className='text-center text-primary mt-2 mb-2'>Our All Products</h1>

            <div className='container'>
                <div className='row g-4'>
                    {
                        products.map(product => <AllItems
                            key={product.id}
                            product={product}
                        ></AllItems>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageItems;