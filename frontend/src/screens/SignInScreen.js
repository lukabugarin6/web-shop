import React, { useState } from "react";

import { Link } from "react-router-dom";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // todo : sign in
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-1/3 mx-auto flex flex-col gap-y-6 py-8 pb-4 px-12 justify-start border-1 border-secondary rounded-2xl"
      >
        <div>
          <h1 className="text-4xl font-medium">Uloguj Se</h1>
        </div>
        <div className="flex flex-col gap-y-1">
          <label className='text-lg ' htmlFor="email">Email adresa </label>
          <input
            type="email"
            id="email"
            className="border-1 border-secondary flex-grow pl-4 py-2 "
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className='text-lg' htmlFor="email">Sifra</label>
          <input
            type="password"
            id="password"
            className="border-1 border-secondary flex-grow pl-4 py-2 "
            placeholder="Enter password"
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
