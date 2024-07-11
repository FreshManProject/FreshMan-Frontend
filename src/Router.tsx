import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/Register/RegisterPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}
