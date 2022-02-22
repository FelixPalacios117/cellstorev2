import React from "react";
import Navbar from "../layout/navbar";

const Carrito = () => {
  return (
    <div className="bg-slate-500  min-h-screen">
      <Navbar type="carrito" />
      <h1 className=" text-white text-4xl text-center my-8">
        Productos agregados
      </h1>
      <div className="flex justify-center h-max    ">
        <div className="col-span-12 ">
          <div className="overflow-auto lg:overflow-visible "></div>
          <table className="table border-separate space-y-12 text-m ">
            <thead className="bg-gray-800 text-gray-300 pb-4">
              <tr className="">
                <th className="p-5   ">Imagen</th>
                <th className="p-5 text-left">Producto</th>
                <th className="p-5 text-left">Cantidad</th>
                <th className="p-5 text-left ">Eliminar</th>
              </tr>
            </thead>
            <tbody>
            {/* {peliculas.map((item,index)=>(
                                        <Peliculas
                                        key={index}
                                        nombre={item.name}
                                        duracion={item.duration}
                                        director={item.director}
                                        clasificacion={item.classification}
                                        id={item._id}
                                        picture={item.picture}
                                        onDelete={handleDelete}
                                        onEdit={handleEdit}
                                        />
                                    ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
