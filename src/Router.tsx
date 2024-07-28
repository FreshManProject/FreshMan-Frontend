import { createBrowserRouter } from 'react-router-dom';
import { RegisterRouter } from './router/register/RegisterRouter';
import { LoginRouter } from './router/login/LoginRouter';
import { ProductRouter } from './router/product/ProductRouter';
import { MypageRouter } from './router/mypage/MyPageRouter';
import { InquiryRouter } from './router/inquiry/InquiryRouter';
import { SearchRouter } from './router/search/SearchRouter';

export default function Router() {
    return createBrowserRouter([
        ...LoginRouter,
        ...RegisterRouter,
        ...ProductRouter,
        ...MypageRouter,
        ...InquiryRouter,
        ...SearchRouter,
    ]);
}
