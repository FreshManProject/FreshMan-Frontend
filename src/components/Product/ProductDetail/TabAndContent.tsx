import { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from '@/components/Review';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QnAList } from '@/components/QnA';
import { useProductStore } from '@/store/product';
import { useGetProductQnaList } from '@/hooks/query/product';
import { SendProductIdButton } from '@/components/common';
import { useGetInfiniteReview } from '@/hooks/query/review';
import TabAndContentLayout from './TabAndContentLayout';

export default function TabAndContent() {
    const { id } = useParams();
    const tabs = [
        { name: 'productInfo', title: '상품정보' },
        { name: 'productReview', title: '리뷰' },
        { name: 'productQnA', title: 'Q&A' },
    ];
    const [isTabChange, setIsTabChange] = useState<Record<string, boolean>>(
        tabs.reduce(
            (acc, tab, index) => ({ ...acc, [tab.name]: index === 0 }),
            {},
        ),
    );
    const { description } = useProductStore();
    const qnaData = useGetProductQnaList(Number(id), isTabChange.productQnA);
    const reviewData = useGetInfiniteReview(
        Number(id),
        isTabChange.productReview,
    );

    // 처음 상세정보만 api 가져 온 후 탭 이동시 관련 api 호출

    // const { productQnaList } = useGetProductQnaList(Number(id));
    // console.log(productQnaList);
    const handleTabChange = (value: string) => {
        setIsTabChange((prev) =>
            Object.keys(prev).reduce(
                (acc, tab) => {
                    acc[tab] = value === tab;
                    return acc;
                },
                {} as Record<string, boolean>,
            ),
        );
    };

    return (
        <Tabs defaultValue={'productInfo'} onValueChange={handleTabChange}>
            <TabsList
                className={
                    'sticky top-0 z-30 grid h-12 grid-cols-3 rounded-none border-b border-gray200 bg-white text-gray400'
                }
            >
                {tabs.map((tab) => (
                    <TabsTrigger
                        key={tab.name}
                        value={tab.name}
                        className={
                            'text-center text-body2_b data-[state=active]:text-bk data-[state=active]:shadow-none'
                        }
                    >
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value={tabs[0].name}>
                <div className="px-4">{description}</div>
            </TabsContent>
            <TabsContent value={tabs[1].name}>
                <TabAndContentLayout
                    topComponent={
                        <SendProductIdButton
                            path="/review/submit"
                            productSeq={id || ''}
                            name="리뷰쓰기"
                        />
                    }
                    bottomComponent={<ReviewList reviewData={reviewData} />}
                    subTitle="리뷰"
                />
            </TabsContent>
            <TabsContent value={tabs[2].name}>
                <TabAndContentLayout
                    topComponent={
                        <SendProductIdButton
                            path="/qna/submit"
                            productSeq={id || ''}
                            name="문의하기"
                        />
                    }
                    bottomComponent={
                        <Suspense fallback={'dd'}>
                            <QnAList qnaData={qnaData} />
                        </Suspense>
                    }
                    subTitle="문의"
                />
            </TabsContent>
        </Tabs>
    );
}
