import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://pintreachbackend.herokuapp.com/api/auth/login",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};