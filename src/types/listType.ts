export interface ListType<T> {
    list: T[];
    count: number;
    message: string;
    status: number;
}

export interface infiniteListType<T> {
    pageParams: number[];
    pages: T[];
}
