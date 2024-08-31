import axios from "axios"

export const APIAi = axios.create({
    baseURL: 'https://aigo-api.duckdns.org',
    withCredentials: true,
});

const apiCallai = async (url, method = 'get', data = null,token=null) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        if (url.includes('/chatbot/voice')) {
            headers['Content-Type'] = 'multipart/form-data';
        }
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const config = {
            url,
            method,
            headers,
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