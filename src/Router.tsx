import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}
