export interface InquiryType {
    questionSeq: number;
    memberName: null | string;
    content: string;
    image: string;
    isAnswered: boolean;
    postedDate: [number, number, number];
    productName?: string;
    productImage?: null;
    productSeq?: number;
}
