import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL,
    timeout: 3000, // 임시값
});

export default instance;
