import {
  USERDATA_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_ERROR,
} from "../types/currentUser";

export const defaultActivation = {
  activation_date: "",
  expiration_date: "",
  attendances_count: 0,
  is_paid: false,
  is_expired: false,
  id: 0,
  user_id: 0,
};

const initialState = {
  authenticated: false,
  loading: false,
  error: "",
  user: {},
  activations: [],
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
