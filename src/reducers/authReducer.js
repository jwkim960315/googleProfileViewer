import { SIGN_IN, SIGN_OUT } from "../actions/types";
import INITIAL_STATE from "./INITIAL_STATE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userFullName: action.payload.getName(),
        userEmail: action.payload.getEmail(),
        userImageUrl: action.payload.getImageUrl()
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userFullName: null,
        userEmail: null,
        userImageUrl: null
      };
    default:
      return state;
  }
};
