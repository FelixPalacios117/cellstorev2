import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { carritoExistente } from "../../helpers/validations";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
import Fila from "./fila";

const Carrito = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();
  useEffect(() => {
    if (!carritoExistente()) {
      Swal.fire({
        title: "No hay items en el carrito",
        icon: "error",
      });
    }
    setItems(JSON.parse(localStorage.getItem("carrito")).carrito);
    setTotal(JSON.parse(localStorage.getItem("carrito")).subtotal);
  }, []);

  return (
    <div className="bg-slate-500  min-h-screen">
      <Navbar type="carrito" />
      <h1 className=" text-white text-4xl text-center my-8">
        Productos agregados
      </h1>
      <div className="flex justify-center h-max">
        <div className="col-span-12 ">
          <div className="overflow-auto lg:overflow-visible">
          <table className="table border-separate space-y-12 text-lg ">
            <thead className="bg-gray-800 text-gray-300 pb-4">
              <tr className="">
                <th className="p-5   ">Imagen</th>
                <th className="p-5 text-left">Producto</th>
                <th className="p-5 text-left">Cantidad</th>
                <th className="p-5 text-left">Precio</th>
                <th className="p-5 text-left">Subtotal</th>
                <th className="p-5 text-left ">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item,index)=>(
                  <Fila
                    key={index}
                    name={item.name}
                    price={item.price}
                    picture={item.picture}
                    cantidad={item.cantidad}
                  />
                ))
              }
            </tbody>
          </table>
          </div>
          <h1 className=" text-right text-white font-bold text-3xl my-6">Total a pagar : $ {total}</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Carrito;
