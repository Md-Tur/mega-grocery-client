import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-plains-04325.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products];
}

export default useProducts;