import { TopHeader } from '@/components/common';
import CartItemList from '@/components/Cart/CartList';
import CartSummary from '@/components/Cart/CartSummary';
import { useGetCartList } from '@/hooks/query/carts';

export default function CartPage() {
    const { cartList, cartListIsLoading, error } = useGetCartList();

    if (cartListIsLoading) return <div>Loading...</div>;
    if (!cartList || error) return <div>Error : {error?.message}</div>;
    return (
        <>
            <TopHeader>
                <TopHeader.Back backUrl="/" />
                <TopHeader.Title title="장바구니" />
            </TopHeader>
            <CartItemList listData={cartList} />
            <CartSummary listData={cartList} />
        </>
    );
}
