export const sesionIniciada=()=>{
    if(localStorage.getItem('token')){
        return true
    }
    return false
}