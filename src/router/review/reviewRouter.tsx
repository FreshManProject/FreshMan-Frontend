import SubmitReviewPage from '@/pages/Review/SubmitReviewPage';

export const reviewRouter = [
    {
        path: '/review',
        children: [
            {
                path: 'submit',
                element: <SubmitReviewPage />,
            },
        ],
    },
];
