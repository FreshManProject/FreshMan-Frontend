import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SocialLoginRedirectPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const accessToken = new URLSearchParams(location.search).get(
        'access_token',
    );

    useEffect(() => {
        if (accessToken) {
            // 로컬스토리지 저장
            localStorage.setItem('accessToken', accessToken);
            navigate('/');
        } else {
            console.log('로그인에 실패했습니다');
            alert('로그인에 실패했습니다');
            navigate('/login');
        }
    }, []);

    return <div>로딩중...</div>;
}
