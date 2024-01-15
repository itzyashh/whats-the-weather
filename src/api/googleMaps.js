import axios from "axios"

const baseUrl = 'https://maps.googleapis.com/maps/api'

export default axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})