import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ProductOptionType } from '@/types/Product/productDetail';
import { OptionCount } from '../Product/ProductDetail';

export default function CartOption() {
    const [selectedList, setSelectedList] = useState<ProductOptionType[]>([]);

    const handleChangeOption = (value: string) => {
        setSelectedList((prevList) => [
            ...prevList,
            {
                id: value,
                name: value,
                count: 0,
            },
        ]);
    };

    return (
        <div className={'max-h-40 overflow-y-auto'}>
            <Select onValueChange={handleChangeOption}>
                <SelectTrigger
                    className={
                        'h-12 w-full border-gray200 bg-white text-gray400'
                    }
                >
                    <SelectValue placeholder={'옵션을 선택해주세요.'} />
                </SelectTrigger>
                <SelectContent className={'h-56 bg-white'}>
                    <SelectGroup>
                        <SelectLabel>{'옵션을 선택해주세요.'}</SelectLabel>
                        <SelectItem value={'est'}>
                            {'라임썬데이 팩 1'}
                        </SelectItem>
                        <SelectItem value={'cst'}>
                            {'라임썬데이 팩 2'}
                        </SelectItem>
                        <SelectItem value={'mst'}>
                            {'라임썬데이 팩 3'}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <OptionCount
                selectedList={selectedList}
                setSelectedList={setSelectedList}
            />
        </div>
    );
}
