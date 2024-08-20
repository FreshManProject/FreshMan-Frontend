export type filterType = 'price' | 'sort' | 'categorySeq';

export interface productListParamsType {
    categorySeq?: number;
    lowPrice?: number;
    highPrice?: number;
    sort?: string;
    keyword?: string;
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
    favorite: boolean;
    sale?: {
        salePrice: 35000;
        saleRate: 22;
    };
}
export interface filterStateType {
    price: boolean;
    sort: boolean;
    [key: string]: boolean;
}

export interface filterITemType {
    id: number;
    name: string;
    value: string;
    checked: boolean;
}

export interface cartItemType extends productItemType {
    checked: boolean;
    quantity: number;
}
export interface cartListType {
    list: cartItemType[];
    count: number;
}
