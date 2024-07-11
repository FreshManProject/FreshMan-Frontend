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
            <div className="m-auto box-border max-w-[600px] items-center justify-center">
                <App />
            </div>
        </QueryProvider>
    </React.StrictMode>,
);
