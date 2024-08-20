export const dummyProductList = [
    {
        productSeq: 8,
        name: '테스트 상품 8',
        price: 10000,
        brand: '뉴발란스',
        favorite: false,
        sale: {
            salePrice: 7000,
            saleRate: 22,
        },
        image: 'https://image.msscdn.net/images/goods_img/20230214/3082569/3082569_17058889205261_500.jpg',
    },
    {
        productSeq: 7,
        name: '테스트 상품 7',
        price: 7000,
        brand: '나이키',
        favorite: true,
        image: 'https://image.msscdn.net/images/goods_img/20230214/3082569/3082569_17058889205261_500.jpg',
    },
    {
        productSeq: 9,
        name: '테스트 상품 9',
        price: 500000,
        brand: '나이키',
        favorite: false,
        image: 'https://image.msscdn.net/images/goods_img/20230214/3082569/3082569_17058889205261_500.jpg',
    },
];

export const dummyLikeList = [
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
];

export const dummyInquiryList = [
    {
        id: 1,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        date: '2024.07.23',
        author: 'test',
        title: '피부관련해서 질문있습니다.',
        description: '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
        product: '[THREE TO EIGHTY] Essential Color Socks (15colors)',
        answer: '안녕하세요 고객님',
    },
    {
        id: 2,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        date: '2024.07.23',
        author: 'test',
        title: '피부관련해서 질문있습니다.',
        description: '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
        product: '[THREE TO EIGHTY] Essential Color Socks (15colors)',
        answer: '',
    },
    {
        id: 3,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        date: '2024.07.23',
        author: 'test',
        title: '피부관련해서 질문있습니다.',
        description: '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
        product: '[THREE TO EIGHTY] Essential Color Socks (15colors)',
        answer: '안녕하세요 고객님',
    },
];

export const dummySearchList = [
    {
        productSeq: 8,
        name: 'Stussy',
        price: 99000,
        brand: 'New Balance',
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        sale: {
            salePrice: 35000,
            saleRate: 22,
        },
        favorite: false,
    },
    {
        productSeq: 8,
        name: 'Stussy',
        price: 99000,
        brand: 'New Balance',
        discountRate: 0,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        sale: {
            salePrice: 35000,
            saleRate: 22,
        },
        favorite: false,
    },
    {
        productSeq: 8,
        name: 'Stussy',
        price: 99000,
        brand: 'New Balance',
        discountRate: 0,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        sale: {
            salePrice: 35000,
            saleRate: 22,
        },
        favorite: false,
    },
];

export const dummyCartList = [
    {
        checked: true,
        quantity: 1,
        ...dummyProductList[0],
    },
    {
        checked: true,
        quantity: 1,
        ...dummyProductList[1],
    },
    {
        checked: true,
        quantity: 1,
        ...dummyProductList[2],
    },
];
