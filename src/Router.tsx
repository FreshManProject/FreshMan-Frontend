import { createBrowserRouter } from 'react-router-dom';
import GlobalError from './GlobalError';
import ProductPage from './pages/Product/ProductPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterSuccessPage from './pages/Register/RegisterSuccessPage';
import { LayoutWithNav, LayoutWithOutNav } from './components/common/Layout';
import ProductDetailPage from './pages/Product/ProductDetailPage';

export default function Router() {
    return createBrowserRouter([
        {
            path: '/register',
            element: <RegisterPage />,
            children: [
                {
                    path: 'success',
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
            element: <LayoutWithOutNav />,
            children: [
                {
                    path: '/products/:id',
                    element: <ProductDetailPage />,
                },
            ],
        },
        {
            path: '/*',
            element: <GlobalError />,
        },
    ]);
}
