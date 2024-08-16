import { usePostInCart } from '@/hooks/query/carts';
import { LikeBtn } from '../common';
import { GrayBorderButton, PrimaryBkButton } from '../common/Button';

export default function ProductBuyBtn() {
    const { mutatePostInCart } = usePostInCart();

    const handleOnCart = () => {
        mutatePostInCart({ productSeq: 2, quantity: 3 });
    };
    return (
        <div
            className={
                'fixed bottom-0 left-0 right-0 z-40 z-[21] m-auto flex max-w-default items-center justify-between bg-white px-2 py-4 shadow-top [&>#likeBtn]:basis-16 [&>#primaryBtn]:flex-1'
            }
        >
            <LikeBtn favorite={false} size={'lg'} />
            <div className="flex flex-1 gap-2 [&>button]:flex-1">
                <GrayBorderButton onClick={handleOnCart}>
                    장바구니
                </GrayBorderButton>
                <PrimaryBkButton primary type="button">
                    구매하기
                </PrimaryBkButton>
            </div>
            {/* // !옵션 들어갈시 추가 */}
            {/* <Drawer>
                <DrawerTrigger className="w-full [&>button]:w-full">
                </DrawerTrigger>
                <DrawerPortal>
                    <DrawerContent>
                        <ProductOption />
                    </DrawerContent>
                </DrawerPortal>
            </Drawer> */}
        </div>
    );
}
