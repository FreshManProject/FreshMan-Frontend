import { useQuery } from '@tanstack/react-query';
import { ProductList } from '@/components/Product';
import getLikeList from '@/apis/user';

export default function MyLikePage() {
    const {
        data: LikeList,
        isLoading: LikeListIsLoading,
        error,
    } = useQuery({
        queryKey: ['LikeList'],
        queryFn: getLikeList,
    });
    if (LikeListIsLoading) return <div>Loading...</div>;
    if (!LikeList || error) return <div>Error : {error?.message}</div>;

    return (
        <div>
            <ProductList listData={LikeList} size="m" />
        </div>
    );
}
