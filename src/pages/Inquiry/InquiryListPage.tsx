import InquiryList from '@/components/Inquiry/InquiryList';
import { useGetUserInquiryList } from '@/hooks/query/user';

export default function InquiryListPage() {
    const { inquiryList } = useGetUserInquiryList();
    console.log(inquiryList);
    return (
        <div>
            <InquiryList />
        </div>
    );
}
