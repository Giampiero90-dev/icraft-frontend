import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/main" component={MainPage} /> */}
        {/* <Route path="/chat" component={DashBoard} /> */}
      </Switch>
    </div>
  );
}

export default App;
