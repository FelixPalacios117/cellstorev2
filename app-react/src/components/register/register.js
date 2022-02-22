import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className=" min-h-screen bg-slate-500 grid md:grid-cols-7">
          <div className="bg-slate-800 md:col-span-2 md:col-start-6  flex justify-center items-center">
            <form className="grid grid-cols-6">
              <h1 className=" text-white text-4xl text-center col-span-6 my-6">
                Registrarse
              </h1>
              <label className="text-white col-span-6">Nombre</label>
              <input
                className="col-span-6 mb-6 mt-2 p-1 
              focus:border-indigo-500 border-gray-300 rounded-md"
                type="text"
                placehoder="usuario"
              />
              <label className="text-white col-span-6">Usuario</label>
              <input
                className="col-span-6 mb-6 mt-2 p-1 
              focus:border-indigo-500 border-gray-300 rounded-md"
                type="text"
                placehoder="usuario"
              />
              <label className="text-white col-span-6">Contraseña</label> 
              <input
                className="col-span-6 mb-6 mt-2 p-1 
              focus:border-indigo-500 border-gray-300 rounded-md"
                type="password"
                placehoder="usuario"
              />
              <label className="text-white col-span-6">Repetir Contraseña</label>
              <input
                className="col-span-6 mb-6 mt-2 p-1 
              focus:border-indigo-500 border-gray-300 rounded-md"
                type="password"
                placehoder="usuario"
              />
              <label className="text-white col-span-6">Email</label>
              <input
                className="col-span-6 mb-6 mt-2 p-1 rounded-md"
                type="text"
                placehoder="usuario"
              />
              <label className="text-white col-span-6">Seleccionar imagen</label>
              <input
                className="col-span-6 mb-6 mt-2 p-1 rounded-md"
                type="file"
                placehoder="usuario"
              /> 
              <button
                className="bg-blue-600  mt-2
              hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded
              col-span-6"
              >
                Crear usuario
              </button>
              <Link
              to="/login"
                className="bg-green-600  mt-6 text-center
              hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 rounded
              col-span-6"
              >
                Regresar
              </Link>
            </form>
          </div>
        </div>
      );
}
 
export default Register;