import axios from "axios";
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
} from "../Constants/user";
//action registre
export const registre = (user, history) => async (dispatch) => {
  //l'action registre bech tji mel composant data mta3 user eli bech nab3thouh lel back wel function lokhra heya middleware mta3 redux weli heya function between action and reducer
  dispatch({ type: LOAD_USER });
  try {
    const resultat = await axios.post("/api/user/register", user); //bech na7kiw m3a l back  a travers serveur
    dispatch({ type: REGISTRE_USER, payload: resultat.data }); //payload fih { user , token , msg } li 3malnehom fel back
    history.push("/profile");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//action login

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let resultat = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: resultat.data }); //{ msg , token , user}
    history.push("/profile");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  // middleware bech yahki maa l back
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    let resultat = await axios.get("/api/user/current", config); // l get bech thez l url welconfig li fih token
    dispatch({ type: CURRENT_USER, payload: resultat.data }); //{msg , user }
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

//acTion logout
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

//action edit
export const updateUser = (Id, user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let resultat = await axios.put(`/api/user/update/${Id}`, user);
    dispatch({ type: EDIT_USER, payload: resultat.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
//delete user
export const deleteuser = (Id, user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let resultat = await axios.delete(`/api/user/delete/${Id}`, user);
    dispatch({ type: DELETE_USER, payload: resultat.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
//action add_pressing
export const addpressing = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let resultat = await axios.post(`/api/user/add_pressing`, user);
    dispatch({ type: ADD_PRESSING, payload: resultat.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
