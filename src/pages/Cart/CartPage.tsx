import { TopHeader } from '@/components/common';
import { useQuery } from '@tanstack/react-query';
import { getCartList } from '@/apis/user';
import CartItemList from '@/components/Cart/CartItemList';

export default function CartPage() {
    const {
        data: CartList,
        isLoading: CartListIsLoading,
        error,
    } = useQuery({
        queryKey: ['CartList'],
        queryFn: getCartList,
    });
    if (CartListIsLoading) return <div>Loading...</div>;
    if (!CartList || error) return <div>Error : {error?.message}</div>;

    return (
        <>
            <TopHeader>
                <TopHeader.Back backUrl="/" />
                <TopHeader.Title title="장바구니" />
            </TopHeader>
            <CartItemList listData={CartList} />
        </>
    );
}
