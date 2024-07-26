import { getContactList } from '@/apis/user/getContactList';
import { TopHeader } from '@/components/common';
import InquiryList from '@/components/Inquiry/InquiryList';
import { useQuery } from '@tanstack/react-query';

export default function InquiryListPage() {
    const {
        data: inquiryList,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['inquiryList'],
        queryFn: getContactList,
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;

    if (!inquiryList) return <div>No data available</div>;
    return (
        <div>
            <TopHeader backUrl="/mypage" title="상품 문의" />
            <InquiryList inquiryList={inquiryList} />
        </div>
    );
}
