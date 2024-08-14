import { rest, RestRequest, ResponseComposition, RestContext } from 'msw';
import { dummyInquiryList, dummyProudctList, dummySearchList } from './data';

const handlers = [
    rest.get(
        '/questions/products/:id',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            // const page = req.url.searchParams.get('page');
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    list: [
                        {
                            questionSeq: 2,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/1b815211-ed73-4cba-8890-1f2c5a2a5180.jpeg',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                        {
                            questionSeq: 1,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/02b5e0e0-b958-4f4d-a65b-765099a4835b.png',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                        {
                            questionSeq: 2,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/1b815211-ed73-4cba-8890-1f2c5a2a5180.jpeg',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                        {
                            questionSeq: 1,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/02b5e0e0-b958-4f4d-a65b-765099a4835b.png',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                    ],
                }),
            );
        },
    ),
    rest.get(
        '/questions/my-questions',
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
            // const page = req.url.searchParams.get('page');
            return res(
                ctx.json({
                    status: 200,
                    message: 'success',
                    list: [
                        {
                            questionSeq: 2,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/1b815211-ed73-4cba-8890-1f2c5a2a5180.jpeg',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                        {
                            questionSeq: 1,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/02b5e0e0-b958-4f4d-a65b-765099a4835b.png',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                        {
                            questionSeq: 3,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/1b815211-ed73-4cba-8890-1f2c5a2a5180.jpeg',
                            isAnswered: true,
                            postedDate: [2024, 8, 13],
                        },
                        {
                            questionSeq: 4,
                            memberName: null,
                            content: '문의 테스트 내용 ',
                            image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/02b5e0e0-b958-4f4d-a65b-765099a4835b.png',
                            isAnswered: false,
                            postedDate: [2024, 8, 13],
                        },
                    ],
                }),
            );
        },
    ),
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
