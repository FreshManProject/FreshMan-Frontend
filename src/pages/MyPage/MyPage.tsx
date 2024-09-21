import { TopHeader } from '@/components/common';
import { QuickTab } from '@/components/mypage/info';
import MyMenuList from '@/components/mypage/info/MyMenuList';
import { useGetUserInfo } from '@/hooks/query/user';

export default function MyPage() {
    const { userInfo } = useGetUserInfo();

    return (
        <>
            <TopHeader>
                <TopHeader.Title title="마이페이지" />
                <TopHeader.Util cart />
            </TopHeader>
            <div className="px-5 pt-5">
                <h2 className="text-title1_b">{userInfo?.name}님</h2>
                <span className="text-body3 text-gray400">
                    {userInfo?.email}
                </span>
                <QuickTab />
            </div>
            <hr className="mt-4 h-2 border-0 bg-gray100" />
            <MyMenuList />
        </>
    );
}
