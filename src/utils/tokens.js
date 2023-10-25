import {api} from "../service/api";

export const getTokens = () => {
    return {
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token')
    };
};

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem('access_token', token);
    } else {
        delete api.defaults.headers.common.Authorization;
        localStorage.removeItem('access_token');
    }
};

export const setRefreshToken = (token) => {
    if (token) {
        localStorage.setItem('refresh_token', token);
    } else {
        localStorage.removeItem('refresh_token');
    }
};