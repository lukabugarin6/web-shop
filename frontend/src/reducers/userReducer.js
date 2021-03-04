import { USER_SIGNIN_REQUEST } from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    default:
      return state;
  }
};
