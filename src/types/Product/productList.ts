export type filterType = 'price' | 'sort';

export interface ListType<T extends productItemType> {
    list: T[];
    count: number;
}

export interface productListParamsType {
    categorySeq: number;
    lowPrice?: number;
    highPrice?: number;
    sort?: string;
}

export type productListType = ListType<productItemType>;
export type cartListType = ListType<cartItemType>;

export interface productItemType {
    productSeq: number;
    name: string;
    price: number;
    brand: string;
    image: string;
    favorite: boolean;
    sale?: {
        salePrice: number;
        saleRate: number;
    };
}

export interface cartItemType extends productItemType {
    checked: boolean;
    quantity: number;
}

export interface filterStateType {
    price: boolean;
    sort: boolean;
    [key: string]: boolean;
}
