import { Accordion } from '@/components/ui/accordion';
import { InquiryType } from '@/types/User/inquiry';
import { useGetQnaAnswer } from '@/hooks/query/product';
import { useEffect, useState } from 'react';
import QnAItem from './QnAItem';

interface Iprops {
    data: InquiryType[];
}
export default function QnAList({ data }: Iprops) {
    const [isFetching, setIsFetching] = useState(false);
    const [qnaId, setQnaId] = useState('');
    const { answer, isSuccessAnswer } = useGetQnaAnswer(qnaId, isFetching);
    const handleSuccess = () => {
        setIsFetching(false); // 데이터 가져온 후 다시 false로 설정
    };

    const handleToggleAnswer = (value: string) => {
        setQnaId(value);
        setIsFetching(true);
    };

    useEffect(() => {
        if (isSuccessAnswer) handleSuccess();
    }, [isSuccessAnswer]);

    return (
        <Accordion
            type="single"
            collapsible
            className=""
            onValueChange={(value: string) => handleToggleAnswer(value)}
        >
            {data.map((item: InquiryType, index: number) => (
                <QnAItem
                    key={index}
                    value={index}
                    item={item}
                    disabled={!item.isAnswered}
                    answer={answer && answer.content}
                />
            ))}
        </Accordion>
    );
}
