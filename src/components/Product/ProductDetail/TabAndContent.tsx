import { ReviewInProduct } from '@/components/Review';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabAndContent() {
    return (
        <Tabs defaultValue={'productInfo'}>
            <TabsList
                className={
                    'border-gray200 sticky top-0 z-30 grid h-12 grid-cols-3 rounded-none border-b bg-white text-gray400'
                }
            >
                <TabsTrigger
                    value={'productInfo'}
                    className={'!text-body2_b data-[state=active]:text-bk'}
                >
                    {'상품정보'}
                </TabsTrigger>
                <TabsTrigger
                    value={'productReview'}
                    className={'!text-body2_b data-[state=active]:text-bk'}
                >
                    리뷰
                </TabsTrigger>
                <TabsTrigger
                    value={'productQna'}
                    className={'!text-body2_b data-[state=active]:text-bk'}
                >
                    {'Q&A'}
                </TabsTrigger>
            </TabsList>
            <TabsContent value={'productInfo'}>{'상품 상세'}</TabsContent>
            <TabsContent value={'productReview'}>
                <ReviewInProduct />
            </TabsContent>
            <TabsContent value={'productQna'}>{'문의'}</TabsContent>
        </Tabs>
    );
}
