import React from 'react';

const MyItem = ({ item }) => {
    const { name, img, description, price, quantity, supplier, email } = item;
    return (
        <div style={{ position: 'relative' }} className='col col-md-1 col-lg-4'>
            <div>
                <div className='d-flex justify-content-center'>
                    <img style={{ height: "200px", width: "350px" }} src={img} alt="" />
                </div>
                <div>
                    <h2> {name} </h2>
                    <p>Email: {email} </p>
                    <p><small> Description: {description} </small></p>
                    <p>Price: {price} </p>
                    <p>Quantity: {quantity} </p>
                    <p>Supplier: {supplier} </p>

                </div>
            </div>
        </div>
    );
};

export default MyItem;