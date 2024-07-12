import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import QueryProvider from './provider/queryProvider';
import { worker } from './mocks/browser';
import Router from './Router';

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
            <div
                className={
                    'm-auto box-border max-w-[600px] items-center justify-center'
                }
            >
                <RouterProvider router={Router()} />
            </div>
        </QueryProvider>
    </React.StrictMode>,
);
