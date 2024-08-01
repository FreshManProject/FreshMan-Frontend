import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SocialLoginRedirectPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['accessToken']);
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const accessToken = params.get('access_token');
        if (accessToken) {
            setCookie('accessToken', accessToken, { path: '/' });
            navigate('/categories'); // 임시 router
        }
    }, [location, cookies, setCookie, navigate]);
    return <div>소셜 로그인 리다이렉트 페이지</div>;
}
