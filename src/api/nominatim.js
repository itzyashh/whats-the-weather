import axios from "axios"

const baseUrl = 'https://nominatim.openstreetmap.org'

export default axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})