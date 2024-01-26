import axios from "axios";

const customFetch = axios.create({
    baseURL : "https://web-production-3fad.up.railway.app/api/v1"
})


export default customFetch;