import Cookies from "js-cookie";
import axios from "axios";

export const setCookie = (key, value) => {
    Cookies.set(key, value);
}

export const removeCookie = (key) => {
    console.log(key);
    Cookies.remove(key);
}

export const getCookie = (key) => {
    return Cookies.get(key);
}

export const setAuth = (token) => {
    setCookie("token", token);
}

export const logout = () => {
    removeCookie("token");
}

export const isLogin = async () => {
    const token = getCookie("token");
    if(token) {
        const res = await axios.post(`${process.env.SERVER_HOST}/auth`, {token});
        return res.data.success;
    }

    return false;
}