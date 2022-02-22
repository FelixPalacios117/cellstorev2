import React, { useEffect, useState } from "react";
import axiosCliente from "../../helpers/axiosCliente";
import Cards from "../card/card";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
const Productos = () => {
  const [productos,setProductos]=useState([])
  useEffect(()=>{
    getProductos() 
  },[])
  const getProductos= async()=>{
    const datos=await axiosCliente.get('/products')
    setProductos(datos.data.productos)
  }
  return (
    <div className="bg-slate-500  min-h-screen">
      <Navbar type="productos" />
      <h1 className=" text-white text-center text-3xl py-8">Productos</h1>
      <div>
        <div className="px-10 py-20  grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 ">
           {productos.map(item=>(
             <Cards 
             description={item.description}
          key={item._id}
          name={item.name}
          price={item.price}
          picture={item.picture}
             />
           ))} 
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Productos;
