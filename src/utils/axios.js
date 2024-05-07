import axios from "axios";

const customFetch = axios.create({
    baseURL : "https://akaza-server.up.railway.app/api/v1"
})


export default customFetch;