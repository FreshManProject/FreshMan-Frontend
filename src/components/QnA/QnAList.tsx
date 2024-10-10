import { useEffect, useMemo, useState } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { useGetQnaAnswer } from '@/hooks/query/product';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import useView from '@/hooks/observer/useView';
import { QnaItemType } from '@/types/User/qna';
import QnAItem from './QnAItem';
// import QnAItem from './QnAItem';
// import QnAItem from './QnAItem';

interface IQnAList {
    qnaData: UseInfiniteQueryResult<
        InfiniteData<QnaItemType[], unknown>,
        Error
    >;
}

export default function QnAList({ qnaData }: IQnAList) {
    const {
        data: qnaList,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = qnaData;

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const list = useMemo(() => {
        return qnaList?.pages.flatMap((listData) => listData || []) || [];
    }, [qnaList]);

    console.log(list, 'qna', qnaList);
    const [isFetching, setIsFetching] = useState(false);
    const [qnaId, setQnaId] = useState('');
    const { isSuccessAnswer } = useGetQnaAnswer(qnaId, isFetching);
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

    if (isLoading) return <div>Loading...</div>;

    if (!qnaData) return null;

    if (isError) return <div>Error...</div>;

    return (
        <Accordion
            type="single"
            collapsible
            className=""
            onValueChange={(value: string) => handleToggleAnswer(value)}
        >
            {list.length === 0 ? (
                <p className="text-center text-sm text-gray400">
                    등록된 문의가 없습니다.
                </p>
            ) : (
                list?.map((item: QnaItemType, index: number) => (
                    <QnAItem
                        key={index}
                        value={index}
                        item={item}
                        // answer={answer && answer.content}
                    />
                ))
            )}
            {view ? <p>Loading more...</p> : <div ref={onView} />}
        </Accordion>
    );
}
