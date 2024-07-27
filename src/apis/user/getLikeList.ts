import axios from 'axios';

export default async function getLikeList() {
    try {
        const response = await axios.get('/likes?orderby=latest');
        if (response.data) return response.data.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
