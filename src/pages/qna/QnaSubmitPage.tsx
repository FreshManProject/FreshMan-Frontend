import { QnAForm } from '@/components/QnA';
import { TopHeader } from '@/components/common';

export default function QnaSubmitPage() {
    return (
        <>
            <TopHeader>
                <TopHeader.Back />
                <TopHeader.Title title="문의하기" />
            </TopHeader>
            <QnAForm />
        </>
    );
}
