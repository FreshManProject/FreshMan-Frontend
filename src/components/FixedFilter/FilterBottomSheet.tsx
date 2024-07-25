import useGetProductList from '@/hooks/query/product/useGetProductList';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerFooter,
    DrawerPortal,
} from '@/components/ui/drawer';

import { formatNumber } from '@/util/formatData';
import { filterType } from '@/types/Product/productList';
import {
    GrayBorderButton,
    GrayBorderToggleButton,
    PrimaryBkButton,
} from '../common/Button';

interface IFilterBottomSheetProps {
    isOpenFilter: boolean;
    toggleFilter: (filterName: filterType, open: boolean) => void;
}

export default function FilterBottomSheet({
    isOpenFilter,
    toggleFilter,
}: IFilterBottomSheetProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [range, setRange] = useState([1000, 10000000]);
    const [price, setPrice] = useState([1000, 10000000]);

    const { productList } = useGetProductList(
        { categorySeq: Number(id), lowPrice: price[0], highPrice: price[1] },
        isOpenFilter,
    );
    const handleChangePrice = (value: number[]) => {
        setRange(value);
    };
    const handleClickGotoProduct = () => {
        toggleFilter('price', false);
        const params = new URLSearchParams(location.search);
        const sortValue = params.get('sort') ?? 'newest';
        params.delete('sort');
        params.set('lowPrice', String(price[0]));
        params.set('highPrice', String(price[1]));

        navigate(
            `?${params.toString()}${sortValue ? `&sort=${sortValue}` : ''}`,
        );
    };
    const handleChangeEnd = (value: number[]) => {
        setPrice(value);
    };

    return (
        <>
            <FilterBottomSheetTrigger>
                <GrayBorderToggleButton>가격</GrayBorderToggleButton>
            </FilterBottomSheetTrigger>
            <DrawerPortal>
                <DrawerContent className="bg-white px-4">
                    <div className="py-8">
                        <h3 className="text-title3_b">가격</h3>
                        <em className="flex justify-center py-8 text-title3_b not-italic">
                            {formatNumber(range[0])}원 ~{' '}
                            {formatNumber(range[1])}원
                        </em>
                        <Slider
                            defaultValue={[1000, 1000000]}
                            max={1000000}
                            step={10000}
                            min={10000}
                            value={range}
                            onValueCommit={handleChangeEnd}
                            onValueChange={handleChangePrice}
                        />
                    </div>
                    <DrawerFooter className="flex w-full flex-row gap-2 bg-white p-10 px-0 [&>button:last-child]:flex-1">
                        <GrayBorderButton>초기화</GrayBorderButton>
                        <PrimaryBkButton handleClick={handleClickGotoProduct}>
                            {productList?.count} 상품보기
                        </PrimaryBkButton>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
        </>
    );
}
export const FilterBottomSheetRoot = Drawer;
export const FilterBottomSheetTrigger = DrawerTrigger;
