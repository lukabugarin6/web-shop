import React from "react";

import data from "../data";

import CustomContainer from "../components/CustomContainer";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
      <div className="grid grid-cols-12 gap-x-10 gap-y-16">
        {data.products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
 
  );
};

export default HomeScreen;
