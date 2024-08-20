import { useCallback, useMemo, useRef } from 'react';
import { useGetProductSaleList } from '@/hooks/query/product';
import { ProductItem } from '../Product';

export default function SaleContent() {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useGetProductSaleList();

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
            {list.map((item) => (
                <ProductItem key={item.productSeq} {...item} size={'m'} />
            ))}
            {isFetchingNextPage ? <p>Loading more...</p> : <div ref={ref} />}
        </ul>
    );
}
