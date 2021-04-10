import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";

function App() {
  const isLoading = useSelector(selectAppLoading);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <Switch>
        {isLoading ? <Loading /> : null}
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
