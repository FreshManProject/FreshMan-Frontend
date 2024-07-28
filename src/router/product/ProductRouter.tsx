import { LayoutWithNav, LayoutWithOutNav } from '@/components/common/Layout';
import ProductDetailPage from '@/pages/Product/ProductDetailPage';
import ProductPage from '@/pages/Product/ProductPage';

export const ProductRouter = [
    {
        path: '/categories',
        element: <LayoutWithNav />,
        children: [
            {
                path: ':id',
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
];
