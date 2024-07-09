import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QueryProvider from './provider/queryProvider';
import { worker } from './mocks/browser';

// MSW 설정
if (process.env.NODE_ENV === 'development') {
    worker.start();
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <QueryProvider>
            <App />
        </QueryProvider>
    </React.StrictMode>,
);
