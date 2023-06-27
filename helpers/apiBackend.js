import axios from "axios";

const api = axios.create({
    baseURL: process.env.URL_BASE, 
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
