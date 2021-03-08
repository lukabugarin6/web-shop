import React, { useEffect } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'

const PlaceOrderScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(350);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="grid grid-cols-12 pt-24">
        <div className="col-span-8">
          <ul className="flex flex-col gap-y-4 text-primary">
            <li className="bg-gray-100 p-4 py-6 rounded-xl">
              <div>
                <h2 className="text-xl font-semibold mb-4">Otpremanje</h2>
                <p>Ime: {cart.shippingAddress.fullName}</p>
                <p>
                  Adresa: {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li className="bg-gray-100 p-4 py-6 rounded-xl">
              <div>
                <h2 className="text-xl font-semibold mb-4">Placanje</h2>
                <p>Metoda: {cart.paymentMethod}</p>
              </div>
            </li>
            <li className="p-4 py-6">
              <div>
                <h2 className="text-xl font-semibold">Naruceni artikli</h2>
                <ul className="mt-6">
                  <li className="flex justify-between gap-x-10 font-bold h-16 items-center text-primary border-b-1 border-secondary">
                    <div className="w-16 pl-6"></div>
                    <div className="flex-grow ml-8">Ime</div>
                    <div className="mr-8">Cena</div>
                  </li>
                  {cart.cartItems.map((item) => {
                    return (
                      <li key={item.product} className="py-4">
                        <div className="flex justify-between items-center gap-x-20">
                          <div className="w-16 pl-6">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full"
                            />
                          </div>
                          <div className="flex-grow text-quaternary font-medium transition-all duration-300 hover:text-quinary">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>
                          <div className="text-sm">
                            {item.qty} x {item.price}.00 RSD ={" "}
                            {item.qty * item.price}.00 RSD
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-4 ml-12">
          <div className="">
            <ul className="flex gap-y-3 flex-col justify-around rounded-lg bg-gray-100 border-secondary px-10 py-6">
              <li className="text-xl font-semibold mb-4">
                <h2>Ukupno Za Plaćanje</h2>
              </li>
              <li>
                <div className="flex justify-center items-center justify-between">
                  <div>Artikli</div>
                  <div>{cart.itemsPrice.toFixed(2)} RSD</div>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center justify-between">
                  <div>Dostava</div>
                  <div>{cart.shippingPrice.toFixed(2)} RSD</div>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center justify-between">
                  <div>PDV</div>
                  <div>{cart.taxPrice.toFixed(2)} RSD</div>
                </div>
              </li>
              <li>
                {" "}
                <div
                  className="w-full bg-secondary"
                  style={{ height: "1px" }}
                ></div>
              </li>
              <li className="font-semibold">
                <div className="flex justify-center items-center justify-between">
                  <div>Ukupno</div>
                  <div>{cart.totalPrice.toFixed(2)} RSD</div>
                </div>
              </li>
              <li className="text-center mt-4">
                <button
                  type="button"
                  className="transition-all duration-300 bg-quaternary text-sm p-2.5 rounded-lg text-white hover:bg-quinary"
                  onClick={placeOrderHandler}
                  disabled={cart.cartItems.length === 0}
                >
                  Potvrdi narudzbu
                </button>
              </li>
              {
                loading && <Loading />
              }
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
