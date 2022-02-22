import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginU } from "../redux/actions/loginActions";
import { connect } from "react-redux";
import axiosCliente from "../../helpers/axiosCliente";
import Swal from 'sweetalert2'
import { sesionIniciada } from "../../helpers/validations";
const Login = (props) => {
  const { LoginU } = props;
  const data={
    token:''
  }
  useEffect(()=>{
    if(sesionIniciada()){
      Swal.fire({
        title:'Ya tienes una sesion iniciada',
        icon:'warning' 
      })
      props.history.push('/')
    }
  },[])
  const [user, setUser] = useState({
    data: {
      username: "",
      password: "",
    },
  });
  const onLogin = async(e) => {
    e.preventDefault(); 
    const consultar=await axiosCliente.post("/users/login", user.data).then((response) => {
      if (response.status !== 200) {
        Swal.fire({
          icon: 'error',
          title: 'No se pudo iniciar sesion',
          text: response.data.message 
        }) 
      }else{ 
        data.token=response.data.token
        Swal.fire({
          icon: 'success',
          title: 'Sesión iniciada correctamente' 
        })
        localStorage.setItem('token',data.token)
        props.history.push('/')
      }
    }); 
    LoginU(data.token);
  };
  const onChange = (e) => {
    const { data } = user;
    setUser({
      data: {
        ...data,
        [e.target.name]: e.target.value,
      },
    }); 
  };
  return (
    <div className=" min-h-screen bg-slate-500 grid md:grid-cols-7">
      <div className="bg-slate-800 md:col-span-2 md:col-start-6  flex justify-center items-center">
        <form className="grid grid-cols-6" onSubmit={onLogin}>
          <h1 className=" text-white text-4xl text-center col-span-6 my-6">
            Iniciar Sesion
          </h1>
          <label className="text-white col-span-6">Usuario</label>
          <input
            onChange={onChange}
            name="username"
            className="col-span-6 mb-6 mt-2 p-1 
          focus:border-indigo-500 border-gray-300 rounded-md"
            type="text"
            placehoder="usuario"
          />
          <label className="text-white col-span-6">Contraseña</label>
          <input
            onChange={onChange}
            name="password"
            className="col-span-6 mb-6 mt-2 p-1 rounded-md"
            type="password"
            placehoder="usuario"
          />
          <button
            type="submit"
            className="bg-blue-600  mt-2
          hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded
          col-span-6"
          >
            Iniciar sesion
          </button>
          <Link
            to="/register"
            className="bg-green-600  mt-6 text-center
          hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 rounded
          col-span-6"
          >
            Registrarse
          </Link>
          <Link
            to="/"
            className="bg-yellow-700  mt-6 text-center
          hover:bg-yellow-800 text-white font-bold py-2 px-4 border border-yellow-800 rounded
          col-span-6"
          >
            Inicio
          </Link>
        </form>
      </div>
    </div>
  );
};
export default connect(null, { LoginU })(Login);
