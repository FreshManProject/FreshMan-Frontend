import { rest } from 'msw';

const handlers = [
    rest.get('/api/users', (req, res, ctx) => {
        return res(
            ctx.json({
                name: '김남성',
                email: 'kimssd@naver.com',
                address: '서울특별시 강남구 삼성동 22-3',
                addressDetail: '스타벅스 문앞',
                review: 20,
                heart: 200,
            }),
        );
    }),
    rest.get('/api/search/recent', (req, res, ctx) => {
        return res(
            ctx.json({
                data: [
                    '남성 왁스',
                    '파운데이션',
                    '향수',
                    '촉촉한 립',
                    '핸드 크림',
                ],
            }),
        );
    }),
    rest.get('/api/search/option', (req, res, ctx) => {
        return res(
            ctx.json({
                option: ['전체', '베이스', '향수', '립스틱'],
            }),
        );
    }),
    rest.get('/products', (req, res, ctx) => {
        // const url = new URL(request.url);
        // const categorySeq = url.searchParams.get('categorySeq');
        // if (!categorySeq) {
        //     return new HttpResponse(null, { status: 404 });
        // }

        return res(
            ctx.json({
                status: 200,
                message: 'success',
                list: [
                    {
                        productSeq: 8,
                        name: '테스트 상품 7',
                        price: 9900,
                        brand: '뉴발란스',
                        image: '',
                    },
                    {
                        productSeq: 7,
                        name: '테스트 상품 6',
                        price: 7000,
                        brand: '나이키',
                        image: '',
                    },
                ],
                count: 2,
            }),
        );
    }),
];

export default handlers;
