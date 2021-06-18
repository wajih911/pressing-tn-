import "./App.css";
import Landpage from "./Pages/Landpage/Landpage";
import Registre from "./Pages/Registre/Registre";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Errors from "./Pages/Errors/Errors";
import PrivateRoute from "../src/router/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions//user";

import Header from "./Components/Navbar/Header";
import Tarifs from "./Pages/Tarifs/Tarifs";
import { getpressings } from "./Redux/actions/pressing";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
    dispatch(getpressings());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route exact path="/tarifs" component={Tarifs} />
        <Route path="/registre" component={Registre} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
