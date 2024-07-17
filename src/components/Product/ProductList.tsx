import ProductItem from './ProductItem';

const test = [
    { id: 133 },
    { id: 2342 },
    { id: 242 },
    { id: 242 },
    { id: 242 },
    { id: 242 },
];

export default function ProductList() {
    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {test.map((item) => (
                <ProductItem key={item.id} id={item.id} />
            ))}
        </ul>
    );
}
