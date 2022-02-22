export const sesionIniciada=()=>{
    if(localStorage.getItem('token')){
        return true
    }
    return false
}
export const carritoExistente=()=>{
    if(localStorage.getItem('carrito')){
        return true
    }
    return false
}