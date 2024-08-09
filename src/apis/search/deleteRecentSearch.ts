import { axiosAuth } from '..';
import requests from '../requests';

export async function deleteRecentSearch(index: number) {
    try {
        const response = await axiosAuth.delete(
            `${requests.recentSearchList}?index=${index}`,
        );
        if (response.data) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
