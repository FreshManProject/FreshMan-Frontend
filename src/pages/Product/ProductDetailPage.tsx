import { ProductImgSlider } from '@/components/Product';
import ProductBuyBtn from '@/components/Product/ProductBuyBtn';
import { FaStar } from 'react-icons/fa6';

export default function ProductDetailPage() {
    return (
        <>
            <section>
                <ProductImgSlider />
                <div className={'px-2.5'}>
                    <div className={'mb-2 flex items-center justify-between'}>
                        <span className={'text-body2'}>{'stussy'}</span>
                    </div>
                    <p className={'mb-4 text-title3'}>
                        {
                            'Stussy World Tour T-Shirt White 2024 Stussy World Tour T-Shirt White 2024Stussy World Tour T-Shirt White 2024Stussy World Tour T-Shirt White 2024'
                        }
                    </p>
                    <div className={'flex gap-1'}>
                        <FaStar className={'text-primary-review'} />
                        <span className={'text-body3'}>{'3.5(1,500개)'}</span>
                    </div>
                    <div className={'mt-3'}>
                        <del
                            className={
                                'text-body block text-body4 text-gray-400'
                            }
                        >
                            {'304,000원'}
                        </del>
                        <div className={'flex justify-between'}>
                            <em
                                className={
                                    'text-body2_b text-subTitle not-italic'
                                }
                            >
                                {'222,333원'}
                            </em>
                            <em
                                className={
                                    'mr-2 text-body2_b text-subTitle not-italic text-pointRed'
                                }
                            >
                                {'30%'}
                            </em>
                        </div>
                    </div>
                </div>
            </section>

            <ProductBuyBtn />
        </>
    );
}
