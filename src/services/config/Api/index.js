import axios from "axios"

export const baseURL = "http://192.168.100.111:8080/"
// export const baseURL = "https://cuppa-backend-9a54793717b3.herokuapp.com/"


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

export const UpdatePassword = async (token, body) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/updatePassword`, body, { headers });
        return response?.data;
    } catch (error) {
        return error;
    }
};

export const updateProfile = async (token, body) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/updateAdminDetails`, body, { headers });
        return response?.data;
    } catch (error) {
        return error;
    }
};

export const uploadRewardImage = async (formData, token) => {
    try {

        const headers = {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}`
        }
        const { data } = await axios.post(`${baseURL}user/uploadProfile`, formData, { headers })
        return data
    } catch (error) {
        return error
    }
}

export const addReward = async (token, body) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/createSuperAdminReward`, body, { headers })
        return response?.data
    } catch (error) {
        return error
    }
}

export const handleDeleteReward = async (rewardId, token) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/deleteSuperAdminReward`, { rewardId }, { headers })
        return response?.data
    } catch (error) {
        return error
    }
}

export const updateReward = async (token, body) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/updateSuperAdminReward`, body, { headers })
        return response?.data
    } catch (error) {
        return error
    }
}

export const activateAccount = async (token, outletId) => {
    try {
        console.log(outletId);

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/activateOutlet`, {outletId}, { headers })
        return response?.data
    } catch (error) {
        return error
    }
}

export const deactivateOutlet = async (token, outletId) => {
    try {
        console.log(outletId);

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const response = await axios.post(`${baseURL}superAdmin/deactivateOutlet`, {outletId}, { headers })
        return response?.data
    } catch (error) {
        return error
    }
}


