import { ListType } from '../listType';

export interface reviewParmsType {
    body: FormData;
}

export interface reviewProductType {
    reviewSeq: number;
    userName: string;
    content: string;
    score: number;
    createdAt: [number, number, number, number, number, number];
}

export type reviewListType = ListType<reviewProductType>;
