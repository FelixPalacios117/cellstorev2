import React from "react";
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from "./components/login/login";
import Main from "./components/main/main";
import Register from './components/register/register'
import Productos from "./components/productos/productos";
import Carrito from "./components/carrito/carrito";
const Routes=()=>(
    <Router>
        <Route exact path="/" component={Main}/>
        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/carrito" component={Carrito}/>
    </Router>
)
export default Routes