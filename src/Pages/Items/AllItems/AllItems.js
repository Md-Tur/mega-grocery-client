import React from 'react';
import { Button } from 'react-bootstrap';

const AllItems = ({ product }) => {

    const { name, img, description, price, quantity, supplier, _id } = product;

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete it');

        if (proceed) {
            const url = `https://cryptic-plains-04325.herokuapp.com/item/${id}`;
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
                    <Button onClick={() => handelDelete(_id)} variant="outline-danger">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default AllItems;