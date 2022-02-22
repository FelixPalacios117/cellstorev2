import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Routes from "./routes";
import store from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
