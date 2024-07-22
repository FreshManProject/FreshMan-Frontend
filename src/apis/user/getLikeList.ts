import axios from 'axios';

export default async function getLikeList() {
    const response = await axios.get('/likes?orderby=latest');
    if (response.data) return response.data.data;
    return null;
}
