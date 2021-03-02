import React, { useState, useEffect } from "react";

import axios from "axios";

import Product from "../components/Product";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/products");
      setLoading(false);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

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
