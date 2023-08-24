import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': '31133b3f57msh83a656b74774fdap19665cjsnca4b18e1486b',//use api key directly only don't use env file. getting error 403
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};