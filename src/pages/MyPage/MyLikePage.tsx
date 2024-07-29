import { TopHeader } from '@/components/common';
import getLikeList from '@/apis/user/getLikeList';
import { useQuery } from '@tanstack/react-query';
import { ProductList } from '@/components/Product';

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
            <TopHeader backUrl="/mypage" title="찜" />
            <ProductList listData={LikeList} size="m" />
        </div>
    );
}
