import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import AllItems from '../AllItems/AllItems';

const ManageItems = () => {

    const [products] = useProducts();

    return (
        <div>
            <div style={{ bottom: '0' }} className=' mt-2 mb-2 d-flex justify-content-center'>
                <Link to='/additems'>
                    <Button variant="outline-success">Add New Item</Button>
                </Link>
            </div>
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