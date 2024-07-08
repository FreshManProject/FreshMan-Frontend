import ProductItem from './ProductItem';

const test = [{ id: 133 }, { id: 2342 }, { id: 242 }];

const ProductList = () => {
    return (
        <ul className="flex flex-wrap gap-y-10">
            {test.map((item, idx) => (
                <ProductItem key={idx} />
            ))}
        </ul>
    );
};

export default ProductList;
