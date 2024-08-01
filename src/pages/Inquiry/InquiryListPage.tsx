import { getInquiryList } from '@/apis/user';
import InquiryList from '@/components/Inquiry/InquiryList';
import { useQuery } from '@tanstack/react-query';

export default function InquiryListPage() {
    const {
        data: inquiryList,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['inquiryList'],
        queryFn: getInquiryList,
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;

    if (!inquiryList) return <div>No data available</div>;
    return (
        <div>
            <InquiryList inquiryList={inquiryList} />
        </div>
    );
}
