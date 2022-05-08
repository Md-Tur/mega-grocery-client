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
        console.log(user);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2 mb-2'>Please add a new item here</h2>
            <form onSubmit={handleAddItem}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" id="" disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" id="" disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="" id="" placeholder='Photo URL' required />
                <br />
                <textarea className='w-100 mb-2' placeholder='Description' required></textarea>
                <br />
                <input className='w-100 mb-2' type="number" name="" id="" placeholder='Price' required />
                <br />
                <input className='w-100 mb-2' type="number" name="" id="" placeholder='Quantity' required />
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