import axios from "axios"

export const APIAi = axios.create({
    baseURL: 'http://3.34.120.240:5000',
    withCredentials: true,
});

const apiCallai = async (url, method = 'get', data = null) => {
    try {
        const config = {
            url,
            method,
            withCredentials: true,
        };

        if (method.toLowerCase() === 'get') {
            config.params = data; 
        } else {
            config.data = data;
        }

        const response = await APIAi(config);
        return response;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

export default apiCallai;