import React, { useState } from "react";

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="col-span-2 text-primary">
      <a href={`/product/${product._id}`}>
        <div className="h-56">
          <img
            className="h-full w-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="py-4 text-center flex flex-col gap-y-2">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <h3 className="text-sm font-semibold">{product.author}</h3>
          <p className="text-sm"> {product.price},00 RSD</p>
        </div>
      </a>
    </div>
  );
};

export default Product;
