import { combineReducers } from "redux";
import userReducer from "../reducer/user";
import pressingReducer from "../reducer/pressing";

const rootReducer = combineReducers({ userReducer, pressingReducer });

export default rootReducer;
