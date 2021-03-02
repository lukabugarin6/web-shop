import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import Product from "../components/Product";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector( state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, []);



  return (
    <div className="grid grid-cols-12 gap-x-10 gap-y-16">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        products.map((product) => {
          return <Product product={product} key={product._id} />;
        })
      )}
    </div>
  );
};

export default HomeScreen;
