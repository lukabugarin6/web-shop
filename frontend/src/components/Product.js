import React, { useState } from "react";

import { Link } from 'react-router-dom';

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="col-span-2 text-primary">
      <Link to={`/product/${product._id}`}>
        <div className="h-56">
          <img
            className="h-full w-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        </Link>
        <div className="py-4 text-center flex flex-col gap-y-2">
            <Link to={`/product/${product._id}`}>  <h2 className="text-lg font-semibold">{product.name}</h2></Link>
          <h3 className="text-sm font-semibold">{product.author}</h3>
          <p className="text-sm"> {product.price},00 RSD</p>
        </div>
     
    </div>
  );
};

export default Product;
