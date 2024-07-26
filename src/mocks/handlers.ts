import { rest } from 'msw';
import { dummyPorudctList } from './data';

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
        const low = req.url.searchParams.get('lowPrice');
        const high = req.url.searchParams.get('highPrice');
        // low 이하 ~ hight 이하
        const calculateList = dummyPorudctList.filter(
            (item) => item.price >= Number(low) && item.price <= Number(high),
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
                list: dummyPorudctList,
                count: dummyPorudctList.length,
            }),
        );
    }),
    http.get('/likes?orderby=latest', () => {
        return HttpResponse.json({
            data: [
                {
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    name: 'Stussy',
                    description: 'Stussy World Tour T-Shirt White 2024',
                    price: '99,000',
                    discountRate: 0,
                },
                {
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    name: 'Stussy',
                    description: 'Stussy World Tour T-Shirt White 2024',
                    price: '99,000',
                    discountRate: 0,
                },
                {
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    name: 'Stussy',
                    description: 'Stussy World Tour T-Shirt White 2024',
                    price: '99,000',
                    discountRate: 0,
                },
                {
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    name: 'Stussy',
                    description: 'Stussy World Tour T-Shirt White 2024',
                    price: '99,000',
                    discountRate: 0,
                },
            ],
        });
    }),
    http.get('/api/contact', () => {
        return HttpResponse.json({
            data: [
                {
                    id: 1,
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    date: '2024.07.23',
                    author: 'test',
                    title: '피부관련해서 질문있습니다.',
                    description:
                        '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
                    product:
                        '[THREE TO EIGHTY] Essential Color Socks (15colors)',
                    answer: '안녕하세요 고객님',
                },
                {
                    id: 2,
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    date: '2024.07.23',
                    author: 'test',
                    title: '피부관련해서 질문있습니다.',
                    description:
                        '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
                    product:
                        '[THREE TO EIGHTY] Essential Color Socks (15colors)',
                    answer: '',
                },
                {
                    id: 3,
                    image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
                    date: '2024.07.23',
                    author: 'test',
                    title: '피부관련해서 질문있습니다.',
                    description:
                        '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
                    product:
                        '[THREE TO EIGHTY] Essential Color Socks (15colors)',
                    answer: '안녕하세요 고객님',
                },
            ],
        });
    }),
];

export default handlers;
