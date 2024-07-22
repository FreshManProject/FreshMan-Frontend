import { useQuery } from '@tanstack/react-query';
import { GrDeliver } from 'react-icons/gr';
import { MdOutlineRateReview } from 'react-icons/md';
import { GoHeartFill, GoChevronRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/user';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TopHeader } from '@/components/common';

export default function MyPageInformation() {
    const navigate = useNavigate();
    const userStore = useAuthStore();
    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await fetch('/api/users', {
                method: 'GET',
            });
            if (!response.ok) throw new Error('Network response is not ok');
            return response.json();
        },
    });
    useEffect(() => {
        if (user) {
            if (userStore.name !== user.name) {
                userStore.setName(user.name);
            }
            if (userStore.email !== user.email) {
                userStore.setEmail(user.email);
            }
            if (userStore.address !== user.address) {
                userStore.setAddress(user.address);
            }
            if (userStore.addressDetail !== user.addressDetail) {
                userStore.setAddressDetail(user.addressDetail);
            }
        }
    }, [user, userStore]);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;
    return (
        <div>
            <TopHeader title="마이페이지" />
            <div className="mx-4 mt-8 flex flex-row items-center justify-between">
                <div>
                    <h2 className="mb-2 text-2xl font-bold">{`${user.name}님`}</h2>
                    <p className="text-sm text-gray-400">{user.email}</p>
                </div>
                <GoChevronRight
                    size={24}
                    onClick={() => navigate('/mypage/info')}
                />
            </div>
            <div className="mx-16 my-4 flex flex-row justify-between">
                <div className="flex flex-col items-center justify-center">
                    <GrDeliver size={30} />
                    <p>배송지 관리</p>
                    <Button
                        className="text-[#7BDFF2]"
                        onClick={() => navigate('/mypage/address')}
                    >
                        보기
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <MdOutlineRateReview size={30} />
                    <p>나의 리뷰</p>
                    <Button className="text-[#7BDFF2]">{user.review}</Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <GoHeartFill size={30} />
                    <p>찜</p>
                    <Button className="text-[#7BDFF2]">{user.heart}</Button>
                </div>
            </div>
            <div className="border-b-[1px] border-b-gray-100" />
            <div>
                <p className="my-5 text-body3 text-gray-400">문의</p>
                <div className="my-5 flex flex-row justify-between">
                    <p className="text-sm">문의 내역</p>
                    <GoChevronRight className="text-gray-400" size={24} />
                </div>
            </div>
        </div>
    );
}
