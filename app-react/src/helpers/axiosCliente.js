import axios from "axios";

const axiosCliente=axios.create({
    baseURL:'http://localhost:5000' 
}); 
export default axiosCliente