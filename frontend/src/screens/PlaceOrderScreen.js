import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const PlaceOrderScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <ul className='pt-24 flex flex-col gap-y-4 text-primary'>
            <li className='bg-gray-100 p-4 py-6 rounded-xl'>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Otpremanje</h2>
                <p>Ime: {cart.shippingAddress.fullName}</p>
                <p>
                  Adresa: {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li className='bg-gray-100 p-4 py-6 rounded-xl'>
              <div>
                <h2 className='text-xl font-semibold mb-4'>Placanje</h2>
                <p>Metoda: {cart.paymentMethod}</p>
              </div>
            </li>
            <li className='p-4 py-6'>
              <div>
                <h2 className='text-xl font-semibold'>Naruceni artikli</h2>
                <ul className="">
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
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
