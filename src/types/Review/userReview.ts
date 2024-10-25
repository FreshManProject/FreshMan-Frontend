import { ListType } from '../listType';

export interface reviewParmsType {
    body: FormData;
}

// 임시 타입
export interface reviewProductType {
    rating: number;
    user: {
        username: string;
    };
    image: string;
    option: string;
    date: Date;
    description: string;
}

export type reviewListType = ListType<reviewProductType>;
