import ProductBuyBtn from '@/components/Product/ProductBuyBtn';
import { TabAndContent } from '@/components/Product/ProductDetail';

export default function ProductDetailPage() {
    return (
        <div className="pb-28">
            <TabAndContent />
            <ProductBuyBtn />
        </div>
    );
}
