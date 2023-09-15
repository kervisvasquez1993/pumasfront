import axios from "axios";

export const api = axios.create({
    baseURL: process.env.URL_BASE, 
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
    },
});


