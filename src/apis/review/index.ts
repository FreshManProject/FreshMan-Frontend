import { reviewListType, reviewParmsType } from '@/types/Review/userReview';
import axios from 'axios';
import { axiosAuth } from '..';

export async function getInfiniteReview({
    productSeq,
    pageParam = 1,
}: {
    productSeq: number;
    pageParam?: unknown;
}): Promise<reviewListType> {
    try {
        const response = await axios.get<reviewListType>(
            `/products/review/${productSeq}`,
            {
                params: {
                    page: pageParam,
                },
            },
        );

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch review list');
    }
}

export async function postReview(data: reviewParmsType) {
    try {
        const response = await axiosAuth.post('/products/reviews', data.body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}
