import { TopHeader } from '@/components/common';
import { GoChevronRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

export default function MyInformation() {
    const navigate = useNavigate();
    return (
        <div>
            <TopHeader backUrl="/mypage" title="내 정보" />
            <div className="flex flex-col justify-center text-body2">
                <div className="flex h-10 items-center justify-between">
                    <p>내 정보 수정</p>
                    <GoChevronRight
                        size={24}
                        className="text-gray-400"
                        onClick={() => navigate('/mypage/info/edit')}
                    />
                </div>
                <div className="flex h-10 items-center">로그아웃</div>
                <div className="flex h-10 items-center">회원탈퇴</div>
            </div>
        </div>
    );
}
