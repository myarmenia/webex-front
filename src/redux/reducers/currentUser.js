import {
  USERDATA_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_ERROR,
} from "../types/currentUser";

const initialState = {
  authenticated: false,
  loading: false,
  error: "",
  user: {},
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { ...state, loading: true };

    case USERDATA_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload.user,
        activations: action.payload.activations,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload,
      };

    case SIGNIN_ERROR:
      return { ...state, loading: false, error: action.errorMessage };

    default:
      return state;
  }
}
