import axios from "axios";

export const ApiBackend = axios.create({
    baseURL: "http://localhost:1337"
});
