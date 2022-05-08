import React from 'react';

const Outlets = () => {
    return (
        <div className='container mt-3 mb-2 bg-dark p-2 bg-opacity-50'>
            <h2 className='text-white text-center'>Our Outlets</h2>
            <div className='text-center text-white'>
                <h3 className='mt-3 mb-3'>Now we are available on three new outlets</h3>
                <div className='d-flex justify-content-around'>
                    <div>
                        <h5>Outlet - 1</h5>
                        <p>Road: 12 new market</p>
                        <p>Building: Konka Tower</p>
                        <p>Telephone: 21345678</p>
                        <p>Banani,Dhaka-1100</p>
                    </div>
                    <div>
                        <h5>Outlet - 2</h5>
                        <p>Road: 09 agrabad</p>
                        <p>Building: Jalal Tower</p>
                        <p>Telephone: 21345677</p>
                        <p>Motijhil,Dhaka-1250</p>
                    </div>
                    <div>
                        <h5>Outlet - 3</h5>
                        <p>Road: 21 mirpur</p>
                        <p>Building: Soukhin Tower</p>
                        <p>Telephone: 21345679</p>
                        <p>Mirpur,Dhaka-1201</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outlets;