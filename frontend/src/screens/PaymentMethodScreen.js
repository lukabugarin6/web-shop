import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from "../actions/cartActions";

const PaymentMethodScreen = (props) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if(!shippingAddress.address) {
      props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    props.history.push('/placeorder')
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form
        onSubmit={submitHandler}
        className="w-1/3 mx-auto flex flex-col gap-y-6 py-8 mt-24 px-12 justify-start bg-gray-100 border-secondary rounded-2xl"
      >
        <div>
          <h1 className="text-4xl font-medium">Placanje</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paybal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paybal">Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <button
            type="submit"
            className="transition-all duration-300 bg-quaternary w-56 p-2.5 rounded-lg text-white hover:bg-quinary"
          >
            Nastavi
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodScreen;
