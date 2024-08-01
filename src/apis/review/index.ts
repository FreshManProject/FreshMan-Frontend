import { reviewParmsType } from '@/types/Review/userReview';
import axios from 'axios';

export default async function postReview(data: reviewParmsType) {
    try {
        const response = await axios.post('/products/reviews', data);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}
