import API_BASE_URL from "./api";
import { getToken } from "./authService";

const getHeaders = () =>{
    const token = getToken();
    return{
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};