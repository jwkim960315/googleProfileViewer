import { SIGN_OUT, ERROR } from "../actions/types";
import INITIAL_STATE from "./INITIAL_STATE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, errMessage: action.payload };
    case SIGN_OUT:
      return { ...state, errMessage: null };
    default:
      return state;
  }
};
