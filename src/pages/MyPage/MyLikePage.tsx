import { TopHeader } from '@/components/common';
import getLikeList from '@/apis/user/getLikeList';
import { useQuery } from '@tanstack/react-query';
import { ProductItem } from '@/components/Product';

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
    if (error) return <div>Error : {error.message}</div>;
    console.log(LikeList);
    return (
        <div>
            <TopHeader backUrl="/mypage" title="찜" />
            <div className="flex flex-wrap">
                {LikeList.map((index: number) => (
                    <ProductItem key={index} id={index} />
                ))}
            </div>
        </div>
    );
}
