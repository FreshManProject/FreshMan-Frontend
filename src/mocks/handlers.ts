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
