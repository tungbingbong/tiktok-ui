import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);

    return response.data;
};

export default httpRequest;
