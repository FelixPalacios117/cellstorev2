import React, { useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { agregarItem } from "../redux/actions/carritoActions";
const Cards = (props) => {
  const{name,price,picture,description,agregarItem}=props
  const [cantidad,setCantidad]=useState(0)
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(cantidad)
    if(cantidad!==0){
      const carrito=[
        {
          name,
          price,
          picture,
          cantidad
        }
      ]
      const item={
        carrito,
        subtotal:props.subtotal+20
      }
      console.log(item)
      if(props.subtotal!==0){
        const viejos=props.carrito.map((item)=>(
          carrito.push(item)
        ))
      }
      agregarItem(item) 
    }
    else{
      Swal.fire(
        {
          title:'Error, la cantidad seleccionada no puede ser  0',
        icon:'error' 
        }
      )
    }
  }
  const onChange=(e)=>{ 
    setCantidad(e.target.value)
  }
    return (  
    <div className=" bg-white max-w-xs rounded-md shadow-lg cursor-pointer mb-20 ">
      <div className=" max-h-56">
        <img src={`http://localhost:5000/images/${picture}`} alt="" />
      </div>
      <div className="px-4 bg-white max-h-40">
        <h3 className="text-lg font-bold text-gray-600 overflow-hidden">{name} $ {price}</h3>
        <h3 className="text-md font-semibold text-gray-600 overflow-hidden">{description}</h3> 
        <form onSubmit={onSubmit}>
        <label className="mr-2 text-lg font-semibold">Cantidad Seleccionada :</label>
        <input type="number" className="text-lg my-1" 
        required min={0} defaultValue={cantidad}
        onChange={onChange}/> 
            <button type={"submit"}
            className="font-semibold text-gray-800
            w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded
            "
            >Agregar al carrito</button> 
        </form>
      </div>
    </div>
    
      );
}
const mapStateToProps=(state)=>(
  {
    carrito:state.carrito.carrito,
    subtotal:state.carrito.subtotal
  }
)
export default connect(mapStateToProps,{agregarItem})(Cards);