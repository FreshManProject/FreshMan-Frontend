export interface productListParamsType {
    categorySeq: number;
    lowPrice?: number;
    highPrice?: number;
    sort?: string;
}

export interface productListType {
    list: productItemType[];
    count: number;
}

export interface productItemType {
    productSeq: number;
    name: string;
    price: number;
    brand: string;
    image: string;
}
