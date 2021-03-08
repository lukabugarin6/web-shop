import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";
import CustomContainer from "./CustomContainer";
import { useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <>
      <header className="text-quaternary">
        <CustomContainer className="flex justify-between flex-wrap items-center h-16">
          <Link to="/" className="text-3xl text-quaternary logo font-bold">
            {/* Polovne<span className='text-quinary'>Knjige</span> */}
          </Link>
          <div className="flex items-center gap-x-12 text-xl ">
            <Link to="/cart" className="text-3xl hover:text-quinary">
              <div className="relative">
                <TiShoppingCart />{" "}
                {cartItems.length > 0 && (
                  <span className=" text-xs bg-quaternary w-5 h-5 inline-flex justify-center items-center rounded-full text-white absolute -right-4 top-2">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
            {userInfo ? (
              <div className="relative dropdown">
                <Link to="#">
                  <div className="transition-all duration-300 inline-flex items-center gap-x-1 hover:text-quinary">
                    <span>{userInfo.name}</span>
                    <span className="">
                      <IoIosArrowDropdownCircle />
                    </span>
                  </div>
                </Link>
                <ul
                  className="transition-all duration-500 dropdown-content absolute bg-quaternary text-white text-sm m-0 px-3 py-2 mt-1 rounded-sm"
                  style={{ minWidth: "10rem" }}
                >
                  <div className="relative w-full h-full">
                    <span className="absolute bg-quaternary w-5 h-4 triangle -top-3.5 -right-2.5"></span>
                  </div>
                  <li>
                    <Link to="/profile" className="hover:text-gray-300">
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link to="/orderhistory" className="hover:text-gray-300">
                      Istorija Porudzbina
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#signout"
                      className="hover:text-gray-300"
                      onClick={signoutHandler}
                    >
                      Izloguj se
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin" className="text-lg hover:text-quinary">
                Sign in
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="relative dropdown">
                <div className="transition-all duration-300 inline-flex items-center gap-x-1 hover:text-quinary">
                  <Link to="#admin">Admin</Link>
                  <span className="">
                    <IoIosArrowDropdownCircle />
                  </span>
                </div>
                <ul className="dropdown-content transition-all duration-500 dropdown-content absolute bg-quaternary text-white text-sm m-0 px-3 py-2 mt-1 rounded-sm"  style={{ minWidth: "10rem" }}>
                <div className="relative w-full h-full">
                    <span className="absolute bg-quaternary w-5 h-4 triangle -top-3.5 -right-2.5"></span>
                  </div>
                  <li>
                    <Link className="hover:text-gray-300" to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/products">Products</Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </CustomContainer>
      </header>
      <style jsx>{`
        .dropdown-content {
          transition: all 0.5s;
          position: absolute;
          right: 0;
          opacity: 0;
          transform-origin: top;
          transform: scaleY(0);
        }
        .triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .dropdown {
          color: #557a95;
        }
        // .dropdown:hover {
        //   color: #B1A296;
        // }
        .dropdown:hover .dropdown-content {
          opacity: 1;
          transform: scaleY(1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
