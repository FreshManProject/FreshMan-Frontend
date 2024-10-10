import { ListType } from '../listType';

export interface QnaItemType {
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

export type QnaListType = ListType<QnaItemType>;

export interface QnaParamsType {
    productSeq: number;
    body: FormData;
}
