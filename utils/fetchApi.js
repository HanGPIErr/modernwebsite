import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2fef48d1a5msh3d1c9b8915313a6p1600aajsn4a0498115c83'
        }
    });
    
    return data;
}