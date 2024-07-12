import { createBrowserRouter } from 'react-router-dom';
import GlobalError from './GlobalError';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterSuccessPage from './pages/Register/RegisterSuccessPage';
import { LayoutWithNav } from './components/common/Layout';

export default function Router() {
    return createBrowserRouter([
        {
            path: '/register',
            element: <RegisterPage />,
            children: [
                {
                    path: 'suscess',
                    element: <RegisterSuccessPage />,
                },
            ],
        },
        {
            path: '/categories',
            element: <LayoutWithNav />,
            children: [
                {
                    path: '',
                    element: <ProductPage />,
                },
            ],
        },
        {
            path: '/*',
            element: <GlobalError />,
        },
    ]);
}
