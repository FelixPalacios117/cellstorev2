import React from "react";
import { Link } from "react-router-dom";
const Fila = (props) => {
    const {picture,name,price,cantidad}=props
  return (
    <tr className="bg-gray-800 text-gray-200">
      <td className="p-5">
        <img
          className="rounded-full h-12 w-12   object-cover"
          src={`http://localhost:5000/images/${picture}`}
          alt={"no hay"}
        />
      </td>
      <td className="p-5">
        <div className="flex align-items-center">
          <div className="ml-3">
            <div className="">{name}</div>
          </div>
        </div>
      </td>
      <td className="p-5">{cantidad}</td>  
      <td className="p-5">$ {price}</td>  
      <td className="p-5">$ {price*cantidad}</td>  
      <td className="p-5">
        <button 
          type="button"
          className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Fila;
