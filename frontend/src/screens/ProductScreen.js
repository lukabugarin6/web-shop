import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Rating from "../components/Rating";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

import { detailsProduct } from "../actions/productActions";

import { TiShoppingCart } from "react-icons/ti";

const ProductScreen = (props) => {
  const [readMore, setReadMore] = useState(false);
  const [inputVal, setInputVal] = useState(1);

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  
  const readMoreHandler = (e) => {
    setReadMore((prevVal) => !prevVal);
  };

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?count=${inputVal}`)
  }

  const incrementInputVal = () => {
    setInputVal(inputVal + 1);
  };

  const decremenentInputVal = () => {
    if (inputVal > 1) {
      setInputVal(inputVal - 1);
    }
  };

  return (
    <div className="grid grid-cols-12 text-primary">
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {" "}
          <div className="col-span-3">
            <img src={product.image} alt={product.name} className="w-full" />
          </div>
          <div className="col-start-5 col-end-11 flex flex-col gap-y-6 py-6">
            <h1 className="text-4xl font-medium">{product.name}</h1>
            <p className="text-xl">Autor: {product.author}</p>
            <div className="flex flex-col gap-y-1 text-sm">
              <Rating rating={product.rating} numReviews={product.numReviews} />
              <p>
                Kategorije :{" "}
                {product.categories.map((category, index) => {
                  const lastItem = index === product.categories.length - 1;
                  return (
                    <span>
                      {category}
                      {!lastItem && ", "}
                    </span>
                  );
                })}
              </p>
            </div>
            <p className="text-sm">
              {readMore
                ? product.description
                : product.description.length > 255
                ? `${product.description.substring(0, 255)}...`
                : product.description}
              {product.description.length > 255 && (
                <button
                  onClick={(e) => readMoreHandler(e)}
                  className="text-quaternary font-medium px-1"
                >
                  {readMore ? "manje detalja" : "detaljnije"}
                </button>
              )}
            </p>
            <div
              className="w-full bg-secondary"
              style={{ height: "1px" }}
            ></div>
            <div>Cena : {product.price}.00 RSD</div>
            {product.countInStock > 0 && (
              <div className="flex items-center gap-x-20">
                <button className="inline-flex justify-center items-center gap-x-1 transition-all duration-300 bg-tertiary w-40 p-2.5 rounded-lg text-white hover:bg-quinary" onClick={addToCartHandler}>
                  Dodaj u korpu
                  <span className="text-xl">
                    <TiShoppingCart />
                  </span>
                </button>
                <div className="flex gap-x-4">
                  <button className="border-2 border-primary" onClick={decremenentInputVal}>-1</button>
                  <input type="number" value={inputVal} disabled className="w-12" />
                  <button className="border-2 border-primary" onClick={incrementInputVal}>+1</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
