import React from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { ListType, productItemType } from '@/types/Product/productList';
import ProductItem from './ProductItem';

interface IProductInfiniteList<T> {
    useGetList: () => UseInfiniteQueryResult<InfiniteData<T, unknown>, Error>;
    size: 's' | 'm';
}

export default function ProductInfiniteList<
    T extends productItemType,
    LT extends ListType<T>,
>({ useGetList, size }: IProductInfiniteList<LT>) {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
        useGetList();

    const observer = React.useRef<IntersectionObserver | null>(null);
    const lastProductRef = React.useCallback(
        (node: HTMLLIElement | null) => {
            if (isFetchingNextPage) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isFetchingNextPage, fetchNextPage, hasNextPage],
    );

    if (status === 'error') return <div>Error...</div>;

    const list = data?.pages.flatMap((listData) => listData.list) || [];

    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {list.map((item, index) =>
                index === list.length - 1 && hasNextPage ? (
                    <ProductItem
                        ref={lastProductRef}
                        key={item.productSeq}
                        {...item}
                        size={size}
                    />
                ) : (
                    <ProductItem key={item.productSeq} {...item} size={size} />
                ),
            )}
            {isFetchingNextPage && <p>Loading more...</p>}
        </ul>
    );
}
