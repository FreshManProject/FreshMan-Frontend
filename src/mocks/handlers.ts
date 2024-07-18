import { http, HttpResponse } from 'msw';

const handlers = [
    // TEST
    http.get('/api/products', ({ params }) => {
        const { id } = params;
        console.log('Fetching user with ID "%s"', id);
    }),
    http.get('/api/users', () => {
        return HttpResponse.json({
            name: '김남성',
            email: 'kimssd@naver.com',
            address: '서울특별시 강남구 삼성동 22-3',
            addressDetail: '스타벅스 문앞',
            review: 20,
            heart: 200,
        });
    }),
    http.get('/api/search/recent', () => {
        return HttpResponse.json({
            data: ['남성 왁스', '파운데이션', '향수', '촉촉한 립', '핸드 크림'],
        });
    }),
    http.get('/api/search/option', () => {
        return HttpResponse.json({
            option: ['전체', '베이스', '향수', '립스틱'],
        });
    }),
];

export default handlers;
