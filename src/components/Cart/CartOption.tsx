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
import CartOptionCount from './CartOptionCount';

export default function CartOption() {
    const [selectedItem, setSelectedItem] = useState<ProductOptionType>();

    const handleChangeOption = (value: string) => {
        console.log(selectedItem);
        setSelectedItem({
            id: value,
            name: value,
            count: 0,
        });
    };

    const options = ['option 1', 'option 2', 'option 3', 'option 4'];
    return (
        <div className={'max-h-40 overflow-y-hidden'}>
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
                        {options.map((item, k) => (
                            <SelectItem value={item} key={k}>
                                {item}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <CartOptionCount />
        </div>
    );
}
