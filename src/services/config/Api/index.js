import axios from "axios"

export const baseURL = "http://192.168.100.112:8080/"

export const Signin = async (body) => {
    try {
        const response = await axios.post(`${baseURL}superAdmin/superAdminSignIn`, body)
        return response?.data
    } catch (error) {
        return error
    }
}

export const handleGetAllOutlets = async (token) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Authorization ${token}`
        }
        const response = await axios.get(`${baseURL}superAdmin/getAllCafes`, { headers })
        return response?.data
    } catch (error) {
        return error
    }
}