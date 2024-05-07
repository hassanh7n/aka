import axios from "axios";

const customFetch = axios.create({
    baseURL : "https://fluttering-jessamyn-freevoice-6000e290.koyeb.app/api/v1"
})


export default customFetch;