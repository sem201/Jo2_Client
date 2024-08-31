import axios from "axios"

export const APIAi = axios.create({
    baseURL: 'https://aigo-api.duckdns.org',
    withCredentials: true,
});
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};


const apiCallai = async (url, method = 'get', data = null) => {
    try {
        const token = getCookie('session');
        const config = {
            url,
            method,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',

                // 'Cookie': `session=${token}`,
            },
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