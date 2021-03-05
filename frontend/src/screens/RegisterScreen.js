import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { register } from "../actions/userActions";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
        alert('Sifre se ne poklapaju')
    }else {
        dispatch(register(name, email, password));
    }
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
        className="w-1/3 mx-auto flex flex-col gap-y-6 py-8 pb-4 px-12 justify-start bg-gray-100 border-secondary rounded-2xl"
      >
        <div>
          <h1 className="text-4xl font-medium">Registruj Se</h1>
        </div>
        {loading && <Loading />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="name">
            Ime{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-1 border-secondary flex-grow pl-4 py-2 "
            placeholder="Unesite ime"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg " htmlFor="email">
            Email adresa{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-1 border-secondary flex-grow pl-4 py-2 "
            placeholder="Unesite email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg" htmlFor="password">
            Sifra
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border-1 border-secondary flex-grow pl-4 py-2 placeholder-"
            placeholder="Unesite sifru"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-lg" htmlFor="confirmPassword">
            Potvrdite Sifru
          </label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            className="border-1 border-secondary flex-grow pl-4 py-2 placeholder-"
            placeholder="Unesite sifru"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button
            type="submit"
            className="transition-all duration-300 bg-quaternary w-56 p-2.5 rounded-lg text-white hover:bg-quinary"
          >
            Registruj Se
          </button>
        </div>
        <div>
          <label />
          <div>
            Vec imate nalog?{" "}
            <span className="text-quaternary hover:text-quinary">
              {" "}
              <Link to={`/signin?redirect=${redirect}`}>Uloguj se</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
