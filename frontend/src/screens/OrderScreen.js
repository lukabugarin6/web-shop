import React, { useEffect } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

const OrderScreen = (props) => {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loading />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Narudzba {order._id}</h1>
      <div className="grid grid-cols-12 pt-24">
        <div className="col-span-8">
          <ul className="flex flex-col gap-y-4 text-primary">
            <li className="bg-gray-100 p-4 py-6 rounded-xl">
              <div>
                <h2 className="text-xl font-semibold mb-4">Otpremanje</h2>
                <p>Ime: {order.shippingAddress.fullName}</p>
                <p>
                  Adresa: {order.shippingAddress.address},{" "}
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Nije Dostavljeno</MessageBox>
                )}
              </div>
            </li>
            <li className="bg-gray-100 p-4 py-6 rounded-xl">
              <div>
                <h2 className="text-xl font-semibold mb-4">Placanje</h2>
                <p>Metoda: {order.paymentMethod}</p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Delivered at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Nije Placeno</MessageBox>
                )}
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
                  {order.orderItems.map((item) => {
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
                  <div>{order.itemsPrice.toFixed(2)} RSD</div>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center justify-between">
                  <div>Dostava</div>
                  <div>{order.shippingPrice.toFixed(2)} RSD</div>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center justify-between">
                  <div>PDV</div>
                  <div>{order.taxPrice.toFixed(2)} RSD</div>
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
                  <div>{order.totalPrice.toFixed(2)} RSD</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
