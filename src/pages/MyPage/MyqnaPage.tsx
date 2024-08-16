import { QnAList } from '@/components/QnA';
import { TopHeader } from '@/components/common';
import { useGetUserQnaList } from '@/hooks/query/user';

export default function MyqnaPage() {
    const { myQnaList, isLoadingMyQnaList } = useGetUserQnaList();

    if (isLoadingMyQnaList) return <div>로딩즁...</div>;

    return (
        <>
            <TopHeader>
                <TopHeader.Title title="상품 문의" />
                <TopHeader.Back backUrl="-1" />
            </TopHeader>
            <QnAList data={myQnaList} />
        </>
    );
}
