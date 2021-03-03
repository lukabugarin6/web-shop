import React from "react";

import { useSelector } from 'react-redux';

import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import CustomContainer from "./CustomContainer";


const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return ( 
      <header className="text-quaternary">
        <CustomContainer className="flex justify-between flex-wrap items-center h-16">
          <Link to="/" className="text-3xl text-quaternary logo font-bold">
            {/* Polovne<span className='text-quinary'>Knjige</span> */}
          </Link>
          <div className="flex gap-x-12 text-xl ">
            <Link to="/cart" className="text-3xl hover:text-quinary">
              <div className='relative'>
              <TiShoppingCart /> {cartItems.length > 0 && <span className=' text-xs bg-quaternary py-0.5 px-1.5 rounded-full text-white absolute -right-4 top-2'>{cartItems.length}</span>}
              </div>
            </Link>
            <Link to="/sign-in" className="text-lg hover:text-quinary">
              Sign in
            </Link>
          </div>
        </CustomContainer>
      </header>
  );
};

export default Navbar;
