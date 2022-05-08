import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddItems = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const item = {
            email: user.email,
            name: event.target.name.value,
            img: event.target.img.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value
        }
        axios.post('https://cryptic-plains-04325.herokuapp.com/newitem', item)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Items added successfully.');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2 mb-2'>Please add a new item here</h2>
            <form onSubmit={handleAddItem}>
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="" disabled readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="name" id="" placeholder='Product name' required />
                <br />
                <input className='w-100 mb-2' type="text" name="img" id="" placeholder='Photo URL' required />
                <br />
                <textarea className='w-100 mb-2' type='text' name='description' placeholder='Description' required></textarea>
                <br />
                <input className='w-100 mb-2' type="number" name="price" id="" placeholder='Price' required />
                <br />
                <input className='w-100 mb-2' type="number" name="quantity" id="" placeholder='Quantity' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="supplier" id="" placeholder='Supplier' autoComplete='off' required />
                <br />
                <input className='btn btn-success' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;