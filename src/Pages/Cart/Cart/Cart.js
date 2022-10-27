import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <p className='bg-success p-5 me-5 rounded'>Congratulation!!This Courses is successfully added to your cart.</p>
            <Button variant="primary" className='mt-2 '><Link className='text-light' to='/'>See all Courses</Link></Button>
        </div>
        
    );
};

export default Cart;