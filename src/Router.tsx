import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
