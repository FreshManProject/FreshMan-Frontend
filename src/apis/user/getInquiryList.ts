import axios from 'axios';

export async function getInquiryList() {
    try {
        const response = await axios.get('/api/contact');
        if (response.data) {
            return response.data.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
