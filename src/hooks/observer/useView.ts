import {
    FetchNextPageOptions,
    InfiniteData,
    InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useCallback, useRef } from 'react';

export default function useView(
    isFetchingNextPage: boolean,
    fetchNextPage: (
        options?: FetchNextPageOptions,
    ) => Promise<
        InfiniteQueryObserverResult<InfiniteData<unknown, unknown>, Error>
    >,
    hasNextPage: boolean,
) {
    const observer = useRef<IntersectionObserver | null>(null);
    const ref = useCallback(
        (node: HTMLDivElement | null) => {
            if (!isFetchingNextPage) {
                return;
            }
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
    return { view: isFetchingNextPage, onView: ref };
}
