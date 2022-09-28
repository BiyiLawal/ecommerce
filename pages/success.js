import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runSchoolPride } from '../lib/utils';

const Success = () => {
    

    useEffect(() => {
        const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

        localStorage.clear();
        setCartItems([]);
        setTotalQuantity(0);
        setTotalPrice(0);
        runSchoolPride();
    }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thanks for your patronage</h2>
            <p className='description'>
                Questions and suggestions? please email
                <a className='email' href='mailto:biyilawal90@gmail.com'>
                    biyilawal90@gmail
                </a>
            </p>
            <Link href='/'>
                <button type='button' className='btn' width='300px'>
                    Check out more Items
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success