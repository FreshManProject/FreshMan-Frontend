import instance from '../axios';
import requests from '../requests';

export async function getRecentSearchList() {
    try {
        const response = await instance.get(requests.recentSearchList);
        if (response.data) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
