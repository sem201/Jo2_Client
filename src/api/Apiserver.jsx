import axios from "axios"

export const APISERVER = axios.create({
    baseURL: 'http://52.79.169.5:8080'
});

// API 호출 함수
const apiCall = async (url, method = 'get', data = null,token = null) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const config = {
            url,
            method,
            headers,
        };

        if (method.toLowerCase() === 'get') {
            config.params = data; 
        } else {
            config.data = data;
        }

        const response = await APISERVER(config);
        return response;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

export default apiCall;