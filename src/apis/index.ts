import axios from 'axios';
// TODO: login 로직 보류
export const BASE_URL = process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL;
// export const BASE_URL = 'http://localhost:3000';

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
    timeout: 10 * 1000,
});

const refreshAccessToken = async () => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL}reissue`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                timeout: 1000,
            },
        );
        if (response.status === 200) {
            const accessToken = response.headers.access_token;
            console.log(accessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

            return true;
        }
        return false;
    } catch (error) {
        console.log(error, 'reissue Error');
        throw Error;
    }
};

axiosAuth.interceptors.request.use(
    async (config) => {
        const modifiedConfig = { ...config };
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return modifiedConfig;
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
            try {
                const response = await refreshAccessToken();
                if (response) {
                    return await axios(originalRequest);
                }
            } catch (err) {
                alert('토큰이 만료되었습니다. 다시 로그인 해주세요');
                // window.location.replace('/auth');
            }
        }
        // 에러 반환.
        return Promise.reject(error);
    },
);
