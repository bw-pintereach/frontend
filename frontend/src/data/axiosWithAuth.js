import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://pintreachbackend.herokuapp.com/api/auth/login";

    return axios.create({
        
        baseURL: proxy + url ,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
    
};