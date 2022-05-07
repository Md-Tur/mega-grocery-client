import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [products] = useProducts();

    return (
        <div>
            <h1 className='text-center text-primary mt-2 mb-2'>Our Products</h1>

            <div className='container'>
                <div className='row g-4'>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='mt-3 mb-3 d-flex justify-content-center'>
                    <Link to="/manageitems">
                        <Button variant="outline-success">Manage All</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;