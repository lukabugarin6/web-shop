import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    if(!userInfo) {
        props.history.push('/signin')
    }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push('/payment');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <form
        onSubmit={submitHandler}
        className="w-1/3 mx-auto flex flex-col gap-y-6 py-8 px-12 justify-start bg-gray-100 border-secondary rounded-2xl mt-24"
      >
        <div>
          <h1 className="text-4xl font-medium">Adresa Isporuke</h1>
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="fullName">
            Puno Ime
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="border-1 border-secondary flex-grow pl-4 py-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="npr. Djordje Djordjevic"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="address">
            Adresa
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="border-1 border-secondary flex-grow pl-4 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="npr. Sime Simica 10"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="city">
            Grad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="border-1 border-secondary flex-grow pl-4 py-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="npr. Novi Sad"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="postalCode">
            Postanski Broj
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="border-1 border-secondary flex-grow pl-4 py-2"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="npr. 21000"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="country">
            Drzava
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="border-1 border-secondary flex-grow pl-4 py-2"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="npr. Srbija"
            required
          />
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

export default ShippingAddressScreen;
