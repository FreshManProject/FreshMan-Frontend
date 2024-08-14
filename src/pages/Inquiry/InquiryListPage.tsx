import { QnAList } from '@/components/QnA';
import { useGetUserInquiryList } from '@/hooks/query/user';

export default function InquiryListPage() {
    const { inquiryList } = useGetUserInquiryList();

    return <QnAList data={inquiryList} />;
}
