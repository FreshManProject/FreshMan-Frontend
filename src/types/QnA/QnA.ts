import { ListType } from '../listType';

export interface QnAItemType {
    questionSeq: number;
    memberName: string | null;
    content: string;
    image: string;
    isAnswered: boolean;
    postedDate: Date;
}

export type QnAListType = ListType<QnAItemType>;
