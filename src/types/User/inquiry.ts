export interface InquiryType {
    id: number;
    image: string;
    date: string;
    author: string;
    title: string;
    description: string;
    product: string;
    answer: string;
}

export interface InquiryListType {
    inquiryList: InquiryType[];
}
