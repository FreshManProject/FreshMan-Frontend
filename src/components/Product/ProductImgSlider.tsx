import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export default function ProductImgSlider() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className={'relative'}>
            <Carousel setApi={setApi} className={'w-full'}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className={'aspect-square'}>
                            <div>{'d'}</div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div
                className={
                    'absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-black bg-opacity-30 px-3'
                }
            >
                <span className={'text-body4 text-white'}>
                    {current}
                    {'/'}
                    {count}
                </span>
            </div>
        </div>
    );
}
