import { Link } from 'react-router-dom';
import { productItemType } from '@/types/Product/productList';
import { Checkbox } from '../ui/checkbox';

export default function CartItem({
    productSeq,
    name,
    brand,
    image,
    // price,
    // sale,
}: productItemType) {
    return (
        <li className="flex w-full flex-col gap-2.5 px-4 py-3.5">
            <div className="flex justify-start gap-2.5">
                <Checkbox className="h-5 w-5 border-gray300 data-[state=checked]:bg-black data-[state=checked]:text-white" />
                <Link
                    to={`/products/${productSeq}`}
                    className="block aspect-[1] h-20 min-w-20"
                >
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </Link>
                <div className={'mr-11 flex w-full flex-col gap-y-2.5 pr-2.5'}>
                    <span className="inline-flex h-5 items-end text-body3">
                        {brand}
                    </span>
                    <Link to={`/products/${productSeq}`}>
                        <p className="line-clamp-2 text-body2_b leading-tight">
                            {name}
                        </p>
                    </Link>
                </div>
            </div>
            {/* // !옵션 들어갈시 추가 */}
            {/* <div className="flex w-full flex-col pl-6">
                <CartOption />
            </div> */}
        </li>
    );
}
