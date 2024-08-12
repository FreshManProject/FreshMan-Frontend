import axios from 'axios';
// TODO: login 로직 보류
// export const BASE_URL = process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL;
export const BASE_URL = 'http://localhost:3000';

export const axiosDefault = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

const refreshAccessToken = async () => {
    try {
        const response = await axiosDefault.post('/reissue');
        if (response.status === 200) {
            const accessToken = response.headers.access_token;
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        throw Error;
    }
};

axiosAuth.interceptors.request.use(
    async (config) => {
        const modifiedConfig = { ...config };
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;
            return modifiedConfig;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

axiosAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
        const errorStatus = error.response.status;
        const originalRequest = error.config;

        // 토근 만료시 access token 재발급
        if (errorStatus === 401) {
            console.log(error, '토큰 만료');
            try {
                const response = await refreshAccessToken();
                if (response) {
                    return await axios(originalRequest);
                }
            } catch (err) {
                alert('토큰이 만료되었습니다. 다시 로그인 해주세요');
                window.location.replace('/auth');
            }
        }
        // 에러 반환.
        return Promise.reject(error);
    },
);
