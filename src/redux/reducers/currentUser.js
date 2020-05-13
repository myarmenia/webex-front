import {
  USERDATA_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_ERROR,
  NOTIFICATION_DELETE_SUCCESS,
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
  activations_loaded: false,
  unread_notifications: [],
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { ...state, loading: true };

    case USERDATA_SUCCESS:
      const {
        activations,
        unread_notifications,
        ...user
      } = action.payload.user;

      return {
        ...state,
        authenticated: true,
        loading: false,
        user,
        activations,
        unread_notifications,
        activations_loaded: true,
      };

    case NOTIFICATION_DELETE_SUCCESS:
      const { unread_notifications: ns } = state;

      return {
        ...state,
        unread_notifications: ns.filter((n) => n.id !== action.payload),
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
