import { rest, RestRequest, ResponseComposition, RestContext } from 'msw';
import { dummyInquiryList, dummyProudctList, dummySearchList } from './data';

const handlers = [
    rest.get(
        '/members',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    data: {
                        name: '김남성',
                        email: 'ddddd@naver.com',
                        address: '서울 특별시 강동구 천호동 222-11 404호',
                        phone: '01023232323',
                        review: 3,
                        favorite: 4,
                    },
                }),
            );
        },
    ),
    rest.get(
        '/api/search/recent',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
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
        },
    ),
    rest.get(
        '/api/search/option',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    option: ['전체', '베이스', '향수', '립스틱'],
                }),
            );
        },
    ),
    rest.get(
        '/products',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            const low = req.url.searchParams.get('lowPrice');
            const high = req.url.searchParams.get('highPrice');
            // low 이하 ~ hight 이하
            const calculateList = dummyProudctList.filter(
                (item) =>
                    item.price >= Number(low) && item.price <= Number(high),
            );
            if (low && high) {
                return res(
                    ctx.json({
                        status: 200,
                        message: 'success',
                        list: calculateList,
                        count: calculateList.length,
                    }),
                );
            }

            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    list: dummyProudctList,
                    count: dummyProudctList.length,
                }),
            );
        },
    ),
    rest.get(
        '/products/onsale',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    list: dummyProudctList,
                    count: dummyProudctList.length,
                }),
            );
        },
    ),
    rest.get(
        '/products/ranking',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            const option = req.url.searchParams.get('option');
            console.log(option);
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    list: dummyProudctList,
                    count: dummyProudctList.length,
                }),
            );
        },
    ),
    rest.get(
        '/products/:id',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    data: {
                        productSeq: 1,
                        name: '테스트 상품 1',
                        price: 45000,
                        sale: {
                            salePrice: 35000,
                            saleRate: 22,
                        },
                        description: '테스트 상품 1입니다.',
                        brand: '테스트 브랜드',
                        imageList: [],
                    },
                }),
            );
        },
    ),
    rest.get(
        '/likes?orderby=latest',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    list: dummyProudctList,
                    count: dummyProudctList.length,
                }),
            );
        },
    ),
    rest.get(
        '/api/contact',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    data: dummyInquiryList,
                }),
            );
        },
    ),
    rest.post(
        '/carts',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    status: 200,
                    quantity: 'success',
                }),
            );
        },
    ),
    rest.get(
        '/api/products?keyword=test',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            return res(
                ctx.json({
                    data: dummySearchList,
                }),
            );
        },
    ),
];

export default handlers;
