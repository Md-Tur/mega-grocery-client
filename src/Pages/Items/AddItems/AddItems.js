import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2 mb-2'>Please add a new item here</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' {...register("description")} />
                <input className='mb-2' type="number" {...register("price", { required: true })} />
                <input className='mb-2' type="number" {...register("quantity", { required: true })} />
                <input className='mb-2' {...register("supplier", { required: true, maxLength: 20 })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItems;