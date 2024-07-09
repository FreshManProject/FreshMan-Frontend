import { useCallback, useState } from 'react';
import ProductItem from './ProductItem';

const test = [
    { id: 133 },
    { id: 2342 },
    { id: 242 },
    { id: 242 },
    { id: 242 },
    { id: 242 },
];

const ProductList = () => {
    const [isClick, setIsClick] = useState<boolean[]>(
        Array(test.length).fill(false),
    );

    const handleClickLike = useCallback((itemIdx: number) => {
        setIsClick((prev) => {
            const newIsClick = [...prev];
            newIsClick[itemIdx] = !newIsClick[itemIdx];
            return newIsClick;
        });
    }, []);

    return (
        <ul className="flex flex-wrap gap-y-10">
            {test.map((item, idx) => (
                <ProductItem
                    key={item.id}
                    isClicked={isClick[idx]}
                    handleClickLike={() => handleClickLike(idx)}
                />
            ))}
        </ul>
    );
};

export default ProductList;
