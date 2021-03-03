import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../actions/cartActions";

import MessageBox from "../components/MessageBox";

import { AiFillDelete } from "react-icons/ai";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  }

  return (
    <div className="grid grid-cols-12 text-primary">
      <div className="col-span-8">
        {/* <h1>Shopping Cart</h1> */}
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            <li className='flex justify-between gap-x-12 font-bold rounded-t-3xl h-16 items-center text-primary border-b-1 border-secondary'>
              <div className='w-16 pl-6'></div>
              <div className='flex-grow ml-8'>Ime</div>
              <div className='mr-12'>Cena</div>
              <div>Kolicina</div>
              <div className='pr-4'>Obrisi</div>
            </li>
            {cartItems.map((item) => {
              return (
                <li key={item.product} className="py-4 border-b-1 border-secondary">
                  <div className="flex justify-between items-center gap-x-20">
                    <div className="w-16 pl-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-grow text-quaternary text-lg font-medium transition-all duration-300 hover:text-quinary">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div className="text-base">{item.price}.00 RSD</div>
                    <div className='text-sm'>{item.qty}</div>
                    <div className="text-quaternary text-2xl pr-6">
                      <button
                        type="button"
                        className='transition-all duration-300 hover:text-quinary'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="col-span-4 ml-12">
        <div className='pt-4'>
          <ul className='text-center h-40 flex flex-col justify-around rounded-lg border-1 border-secondary'>
            <li>
              <h2 className='text font-medium'>
                Ukupno ( {cartItems.reduce((a, c) => a + c.qty, 0)} ) : {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}.00 RSD
              </h2>
            </li>
            <li>
              <button type='button' onClick={checkoutHandler} className='transition-all duration-300 bg-quaternary w-56 p-2.5 rounded-lg text-white hover:bg-quinary' disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
