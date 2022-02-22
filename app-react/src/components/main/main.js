import React, { Fragment, useEffect,useState } from "react";
import Navbar from "../layout/navbar";
import Slider from "../layout/slider";
import Card from "../card/card"; 
import Footer from "../layout/footer";
import axiosCliente from "../../helpers/axiosCliente";
const Main = () => {
  const [ultimos,setUltimos]=useState([])
  useEffect(()=>{
   getDatos()
  },[])
  const getDatos=async()=>{
    const datos= await axiosCliente.get('/products/last')
    setUltimos(datos.data.productos)  
  }
  return (
    <div className="bg-slate-500  min-h-screen">
      <Navbar type="main"/> 
        <h1 className=" text-white text-4xl text-center my-8">
          Bienvenido a cellstore!
        </h1>
        <h1 className="text-white text-4xl text-center  my-10">
          El lugar indicado para adquirir los mejores dispositivos celulares y
          accesorios
        </h1>

        <Slider />
        <h1 className="text-white text text-3xl text-center my-8">
          Productos agregados recientemente
        </h1>     
        <div> 
        <div className="px-10 py-20  grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 "> 
        {ultimos.map(item=>(
          <Card description={item.description}
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

export default Main;
