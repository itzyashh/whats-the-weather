import axios from "axios";
const baseURL = "https://geocoding-api.open-meteo.com/v1"
export default axios.create({
    baseURL,
})
