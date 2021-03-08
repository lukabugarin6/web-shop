import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password are Not Matched");
    } else {
      dispatch(updateUserProfile({ userId: user._id, name, email, password }));
    }
  };
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo._id, user]);
  return (
    <div>
      <form
        className="w-1/3 mx-auto flex flex-col gap-y-6 py-8 px-12 justify-start bg-gray-100 border-secondary rounded-2xl"
        onSubmit={submitHandler}
      >
        <div>
          <h1 className="text-4xl font-medium">Profil</h1>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <Loading />}
            {errorUpdate && <MessageBox variant="danger">{error}</MessageBox>}
            {successUpdate && (
              <MessageBox variant="success">Profil Uspesno Azuriran</MessageBox>
            )}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="text-lg">
                Ime
              </label>
              <input
                id="name"
                type="text"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Unesite ime"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Unesite email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="text-lg">
                Sifra
              </label>
              <input
                id="password"
                type="password"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Unesite sifru"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="confirmPassword" className="text-lg">
                Potvrdite sifru
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="border-1 border-secondary flex-grow pl-4 py-2 "
                placeholder="Potvrdite sifru"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label />
              <button
                className="transition-all duration-300 bg-quaternary w-56 p-2.5 rounded-lg text-white hover:bg-quinary"
                type="submit"
              >
                Azuriraj
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfileScreen;
