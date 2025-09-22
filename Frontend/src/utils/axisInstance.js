import axios from "axios";
import {backend} from '../../Endpoint.js'


const axiosInstance = axios.create({
  baseURL: `${backend.endpoint}`, // Use the base URL from .env
});

export default axiosInstance;