import InquiryListPage from '@/pages/Inquiry/InquiryListPage';
import InquiryPage from '@/pages/Inquiry/InquiryPage';

export const InquiryRouter = [
    {
        path: '/inquiry',
        element: <InquiryPage />,
    },
    {
        path: '/inquiry/list',
        element: <InquiryListPage />,
    },
];
