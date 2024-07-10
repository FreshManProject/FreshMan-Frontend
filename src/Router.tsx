import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterSuccessPage from './pages/Register/RegisterSuccessPage';
import SocialLoginPage from './pages/Login/SocialLoginPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/login" element={<SocialLoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/register/success"
                    element={<RegisterSuccessPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
