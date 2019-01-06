import { SIGN_IN, SIGN_OUT, ERROR } from "./types";

export const signIn = basicProfile => {
  return {
    type: SIGN_IN,
    payload: basicProfile
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const signInErr = errMessage => {
  return {
    type: ERROR,
    payload: errMessage
  };
};
