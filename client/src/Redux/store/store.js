import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk"; // pour rendre le store asynchrone

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))); // le store est synchrone , yekhdem action reducer store w baed yarja3 lel component

export default store;

// nimportiw store fel index bech y3adih as props lel les components lkol
