import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/newitem?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user])

    return (
        <div>
            {/* <h2>My items: {items.length}</h2>
            <p>Name: {items.name}</p>
            <p>Email: {user?.email}</p>
            <h2> {items.name} </h2>
            <p><small> {items.description} </small></p>
            <p>Price: {items.price} </p>
            <p>Quantity: {items.quantity} </p>
            <p>Supplier: {items.supplier} </p> */}

            <h1 className='text-center text-primary mt-2 mb-2'>My Items</h1>

            <div className='container'>
                <div className='row g-4'>
                    {
                        items.map(item => <MyItem
                            key={item._id}
                            item={item}
                        ></MyItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyItems;