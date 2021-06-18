//import types

import {
  LOAD_PRESSINGS,
  FAIL_PRESSINGS,
  GET_PRESSINGS,
} from "../Constants/pressing";

//initial state
const initilaState = {
  Pressing: [], // redux cest instantané kif naamlou refresh data lkol ydhi3ou adheka 3 lech token n7otouh fi local storage
  load: false,
  errors: null,
};
//pure function => (state , action li feha type w payload sous forme {})
const pressingReducer = (state = initilaState, { type, payload }) => {
  switch (type) {
    case LOAD_PRESSINGS:
      return { ...state, load: true };
    // fel payload 3anna objet fih token  w msg w user
    case GET_PRESSINGS:
      return {
        ...state,
        Pressing: payload.pressing,
        load: false,
        isAuth: true,
      };

    case FAIL_PRESSINGS:
      return { ...state, errors: payload, load: false };

    default:
      return state;
  }
};
export default pressingReducer;
