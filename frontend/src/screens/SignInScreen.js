import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-1/3 mx-auto flex flex-col gap-y-6 py-8 pb-4 px-12 justify-start border-1 border-secondary rounded-2xl"
      >
        <div>
          <h1 className="text-4xl font-medium">Uloguj Se</h1>
        </div>
        {loading && <Loading />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="email">
            Email adresa{" "}
          </label>
          <input
            type="email"
            id="email"
            className="border-1 border-secondary flex-grow pl-4 py-2 "
            placeholder="Unesite email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg" htmlFor="email">
            Sifra
          </label>
          <input
            type="password"
            id="password"
            className="border-1 border-secondary flex-grow pl-4 py-2 placeholder-"
            placeholder="Unesite sifru"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button
            type="submit"
            className="transition-all duration-300 bg-quaternary w-56 p-2.5 rounded-lg text-white hover:bg-quinary"
          >
            Uloguj Se
          </button>
        </div>
        <div>
          <label />
          <div>
            Novi korisnik?{" "}
            <span className="text-quaternary hover:text-quinary">
              {" "}
              <Link to="/register">Napravite vas nalog</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInScreen;
