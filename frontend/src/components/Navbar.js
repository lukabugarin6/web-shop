import React from "react";

import { TiShoppingCart } from "react-icons/ti";
import CustomContainer from "./CustomContainer";


const Navbar = () => {
  return ( 
      <header className="text-quaternary">
        <CustomContainer className="flex justify-between flex-wrap items-center h-16">
          <a href="/" className="text-3xl text-quaternary logo font-bold">
            Polovne<span className='text-quinary'>Knjige</span>
          </a>
          <div className="flex gap-x-8 text-xl ">
            <a href="/cart" className="text-3xl hover:text-quinary">
              <TiShoppingCart />
            </a>
            <a href="/sign-in" className="text-lg hover:text-quinary">
              Sign in
            </a>
          </div>
        </CustomContainer>
      </header>
  );
};

export default Navbar;
