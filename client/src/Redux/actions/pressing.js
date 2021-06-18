import { GET_PRESSINGS } from "../Constants/pressing";
import { LOAD_PRESSINGS } from "../Constants/pressing";
import { FAIL_PRESSINGS } from "../Constants/pressing";
import axios from "axios";
export const getpressings = () => async (dispatch) => {
  dispatch({ type: LOAD_PRESSINGS });

  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const resultat = await axios.get("/api/user/pressings", config);
    dispatch({ type: GET_PRESSINGS, payload: resultat.data });
  } catch (error) {
    dispatch({ type: FAIL_PRESSINGS, payload: error.response.data });
  }
};
