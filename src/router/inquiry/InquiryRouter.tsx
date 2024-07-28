import InquiryListPage from '@/pages/Contact/InquiryListPage';
import InquiryPage from '@/pages/Contact/InquiryPage';

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
