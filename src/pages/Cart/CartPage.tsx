import { TopHeader } from '@/components/common';
import CartItemList from '@/components/Cart/CartList';
import CartSummary from '@/components/Cart/CartSummary';
import { useGetCartList } from '@/hooks/query/carts';

export default function CartPage() {
    const { cartList, isLoadingCartList, isErrorCartList } = useGetCartList();

    if (isLoadingCartList) return <div>Loading...</div>;
    if (!cartList || isErrorCartList) return <div>Error...</div>;
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
