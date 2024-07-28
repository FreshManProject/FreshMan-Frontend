import EditAddressPage from '@/pages/MyPage/EditAddressPage';
import EditInformationPage from '@/pages/MyPage/EditInformationPage';
import MyInformationPage from '@/pages/MyPage/MyInformationPage';
import MyLikePage from '@/pages/MyPage/MyLikePage';
import MyPage from '@/pages/MyPage/MyPage';

export const MypageRouter = [
    {
        path: '/mypage',
        element: <MyPage />,
    },
    {
        path: '/mypage/info',
        element: <MyInformationPage />,
    },
    { path: '/mypage/info/edit', element: <EditInformationPage /> },
    {
        path: 'mypage/address',
        element: <EditAddressPage />,
    },
    {
        path: 'mypage/like',
        element: <MyLikePage />,
    },
];
