import { ProductSlider } from '../Product';

export default function HomeContent() {
    const textimg = [
        'https://image.msscdn.net/display/images/2024/07/31/73571d9902014e28b547a1263080f31c.jpg',
    ];
    return (
        <ProductSlider>
            <ProductSlider.Img
                images={textimg}
                title="두피장벽은 튼튼허게"
                subTitle="시즌오프 할인"
            />
        </ProductSlider>
    );
}
