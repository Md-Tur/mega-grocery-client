import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {

    const { _id } = useParams();
    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1 className='text-center text-primary mt-2 mb-2'>Details of item</h1>
        </div>
    );
};

export default ItemDetail;