import { InquiryType } from '@/types/User/inquiry';
import { axiosAuth } from '..';

export async function getUserQnaList() {
    try {
        const response = await axiosAuth.get(`/questions/my-questions`);
        if (response.data) {
            console.log(response.data);
            return response.data.list;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getProductQnaList(
    productSeq: number,
): Promise<InquiryType[]> {
    try {
        const response = await axiosAuth.get(
            `/questions/products/${productSeq}`,
        );
        return response.data.list;
    } catch (error) {
        throw Error;
    }
}

export async function getQnaAnswer(
    questionSeq: number | string,
): Promise<{ content: string }> {
    try {
        const response = await axiosAuth.get(`/answers/${questionSeq}`);
        return response.data;
    } catch (error) {
        throw Error;
    }
}
