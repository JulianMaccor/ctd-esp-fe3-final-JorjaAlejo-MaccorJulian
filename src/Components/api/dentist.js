import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com"

export const getAllDentists = async () => await axios.get(`${API_URL}/users`);
    
export const getDentistById = async (id) => await axios.get(`${API_URL}/users/${id}`);