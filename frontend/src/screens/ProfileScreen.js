import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userActions";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";

const ProfileScreen = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
      e.preventDefault();
  };
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);
  return (
    <div>
      <form className='w-1/3 mx-auto flex flex-col gap-y-6 py-8 px-12 justify-start bg-gray-100 border-secondary rounded-2xl' onSubmit={submitHandler}>
        <div>
          <h1 className="text-4xl font-medium">Profil</h1>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className='text-lg'>Ime</label>
              <input
                id="name"
                type="text"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Unesite ime"
                value={user.name}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className='text-lg'>Email</label>
              <input
                id="email"
                type="email"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Unesite email"
                value={user.email}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className='text-lg'>Sifra</label>
              <input
                id="password"
                type="password"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Unesite sifru"
                
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="confirmPassword" className='text-lg'>Potvrdite sifru</label>
              <input
                id="confirmPassword"
                type="password"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Potvrdite sifru"
                
              />
            </div>
            <div>
                <label />
                <button className='transition-all duration-300 bg-quaternary w-56 p-2.5 rounded-lg text-white hover:bg-quinary' type="submit">Azuriraj</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfileScreen;
