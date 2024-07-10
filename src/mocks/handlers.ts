import { http } from 'msw';

const handlers = [
    // TEST
    http.get('/api/products', ({ params }) => {
        const { id } = params;
        console.log('Fetching user with ID "%s"', id);
    }),
];

export default handlers;
