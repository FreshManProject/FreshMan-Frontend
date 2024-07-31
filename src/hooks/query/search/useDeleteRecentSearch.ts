import { deleteRecentSearch } from '@/apis/search/deleteRecentSearch';
import { useMutation } from '@tanstack/react-query';

export default function useDeleteRecentSearch() {
    const mutation = useMutation({
        mutationFn: (index: number) => deleteRecentSearch(index),
        onError: () => console.error('에러 발생'),
    });
    return mutation;
}
