import { useCallback, useMemo, useRef } from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { ListType, productItemType } from '@/types/Product/productList';
// import ProductItem from './ProductItem';

interface IProductInfiniteList<T, LT> {
    result: UseInfiniteQueryResult<InfiniteData<LT, unknown>, Error>;
    children: (item: T) => React.ReactNode;
}

export default function ProductInfiniteList<
    T extends productItemType,
    LT extends ListType<T>,
>({ result, children }: IProductInfiniteList<T, LT>) {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = result;

    const observer = useRef<IntersectionObserver | null>(null);
    const ref = useCallback(
        (node: HTMLDivElement | null) => {
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

    const list = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {list.map((item) => children(item))}
            {isFetchingNextPage ? <p>Loading more...</p> : <div ref={ref} />}
        </ul>
    );
}
