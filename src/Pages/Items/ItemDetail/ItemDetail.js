import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {

    const { _id } = useParams();

    return (
        <div>
            <h2>Details of item: {_id}</h2>
        </div>
    );
};

export default ItemDetail;