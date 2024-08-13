import axios from "axios"

export const baseURL = "http://192.168.100.111:8080/"

export const Signin = async (body) => {
    try {
        const response = await axios.post(`${baseURL}superAdmin/superAdminSignIn`, body)
        return response?.data
    } catch (error) {
        return error
    }
}