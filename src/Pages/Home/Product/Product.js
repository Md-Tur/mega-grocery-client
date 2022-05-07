import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { name, img, description, price, quantity, supplier } = product;

    return (
        <div style={{ position: 'relative' }} className='col col-md-1 col-lg-4'>
            <div>
                <div className='d-flex justify-content-center'>
                    <img style={{ height: "200px", width: "350px" }} src={img} alt="" />
                </div>
                <div>
                    <h2> {name} </h2>
                    <p><small> {description} </small></p>
                    <p>Price: {price} </p>
                    <p>Quantity: {quantity} </p>
                    <p>Supplier: {supplier} </p>
                </div>
                <div style={{ bottom: '0' }} className='d-flex justify-content-center'>
                    <Link to='/appoinments'>
                        <Button variant="outline-primary">Primary</Button>{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;