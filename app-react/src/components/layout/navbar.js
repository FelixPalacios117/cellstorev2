import React, { Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { sesionIniciada } from "../../helpers/validations";
import {  LogOut } from "../redux/actions/loginActions";
import { connect } from "react-redux";
const Navbar = (props) => {
  const { LogOut} = props;
  const cerrarSesion=()=>{ 
    localStorage.removeItem('token')
    props.history.push('/login')
    LogOut()
  }
  return (
    <nav className=" bg-slate-900 shadow-lg">
      <div className="max-w-full mx-auto px-6">
        <div className="flex justify-end">
          <div className="flex space-x-6">
            <div>
              <Link to="/" className="flex items-center py-4 px-3">
                <span className="text-white text-xl font-semibold">
                  Cellstore
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`font-semibold py-4 px-2 text-lg ${
                  props.type === "main"
                    ? " border-b-4  border-white text-white"
                    : "hover:text-blue-400 hover:border-b-4 text-gray-400  border-blue-400 transition duration-300"
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/Productos"
                className={`font-semibold py-4 px-2 text-lg ${
                  props.type === "productos"
                    ? " border-b-4  border-white text-white"
                    : "hover:text-blue-400 hover:border-b-4 text-gray-400  border-blue-400 transition duration-300"
                }`}
              >
                Productos
              </Link>
              <Link
                to="/carrito"
                className={`font-semibold py-4 px-2 text-lg ${
                  props.type === "carrito"
                    ? " border-b-4  border-white text-white"
                    : "hover:text-blue-400 hover:border-b-4 text-gray-400  border-blue-400 transition duration-300"
                }`}
                >
                Carrito 
              </Link>
              {sesionIniciada()
              ?
              <Fragment>
                <Link
                to="/"
                className="py-4 px-2 text-gray-400 font-semibold text-lg hover:text-blue-400 hover:border-b-4 border-blue-400 transition duration-300"
              >
               Mi perfil
              </Link>
              <button 
              onClick={()=>cerrarSesion()}
              className="py-4 px-2 text-gray-400 font-semibold text-lg hover:text-blue-400 hover:border-b-4 border-blue-400 transition duration-300"
            >
             Cerrar Sesion
            </button>
              </Fragment>
              :<Link
              to="/login"
              className="py-4 px-2 text-gray-400 font-semibold text-lg hover:text-blue-400 hover:border-b-4 border-blue-400 transition duration-300"
            >
              Iniciar Sesion
            </Link>} 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(connect(null,{LogOut})(Navbar)) 
