import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItems = () => {

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const item = {
            name: user.displayName,
            email: user.email,
            img: event.target.img.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value
        }
        console.log(item);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2 mb-2'>Please add a new item here</h2>
            <form onSubmit={handleAddItem}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" id="" disabled readOnly />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" id="" disabled readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="img" id="" placeholder='Photo URL' required />
                <br />
                <textarea className='w-100 mb-2' type='text' name='description' placeholder='Description' required></textarea>
                <br />
                <input className='w-100 mb-2' type="number" name="price" id="" placeholder='Price' required />
                <br />
                <input className='w-100 mb-2' type="number" name="quantity" id="" placeholder='Quantity' required />
                <br />
                <input className='w-100 mb-2' type="text" name="supplier" id="" placeholder='Supplier' required />
                <br />
                <input className='btn btn-success' type="submit" value="Add Item" />
            </form>
            {/* <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' {...register("name", { required: true })} />
                <input className='mb-2'{...register("email", { required: true })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='btn btn-success' type="submit" value="Add Item" />
            </form> */}
        </div>
    );
};

export default AddItems;