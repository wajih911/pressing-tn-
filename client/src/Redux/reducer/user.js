//import types

import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTRE_USER,
  LOGOUT_USER,
  EDIT_USER,
  ADD_PRESSING,
  DELETE_USER,
  LOAD_COMMANDE,
  FAIL_COMMANDE,
  PASSER_COMMANDE,
} from "../Constants/user";

//initial state
const initilaState = {
  user: {}, // redux cest instantané kif naamlou refresh data lkol ydhi3ou adheka 3 lech token n7otouh fi local storage
  errors: null,
  isAuth: false,
  load: false,
  userUpdated: false,
};
//pure function => (state , action li feha type w payload sous forme {})
const userReducer = (state = initilaState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true };
    // fel payload 3anna objet fih token  w msg w user
    case REGISTRE_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    // fel payload 3anna objet fih  token msg user
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    case FAIL_USER:
      return { ...state, errors: payload, load: false };
    case CURRENT_USER:
      return { ...state, user: payload.user, isAuth: true };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case EDIT_USER:
      return { ...state, userUpdated: true };
    case DELETE_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case PASSER_COMMANDE:
      return { ...state, commande: payload.commande, load: false };
    case ADD_PRESSING:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    case LOAD_COMMANDE:
      return { ...state, load: true };
    case FAIL_COMMANDE:
      return { ...state, errors: payload, load: false };

    default:
      return state;
  }
};
export default userReducer;
