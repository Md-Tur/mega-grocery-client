import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllItems = ({ product }) => {

    const { name, img, description, price, quantity, supplier, _id } = product;

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete it');

        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

        }
    }
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
                    <Link to='/'>
                        <Button onClick={() => handelDelete(_id)} variant="outline-danger">Delete</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllItems;