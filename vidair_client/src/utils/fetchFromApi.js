import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '01465a0a64msh4738d5dda8d3ec6p12840cjsn661707dad65d',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};