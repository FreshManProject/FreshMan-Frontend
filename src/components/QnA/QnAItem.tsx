import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface IQnAItemProps {
    value: number;
}

export default function QnAItem({ value }: IQnAItemProps) {
    return (
        <AccordionItem
            value={`item-${value}`}
            className="qnaGroup px-4 data-[state=open]:bg-gray100"
        >
            <AccordionTrigger className="items-start">
                <div className="flex flex-col items-start gap-3">
                    <div className="text-body3 text-gray400">
                        2023.01.01 &nbsp;&nbsp; testset1234
                    </div>
                    <div className="flex">
                        <p className="ellipsis-1 flex-1 text-left text-body2">
                            문의사항이 있는데여?? 문의사항이 있는데여 화장품
                            성분이 궁금해서여
                        </p>
                        <em className="flex-[0.2] text-right text-body2_b not-italic text-gray400">
                            답변대기
                        </em>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-5">
                <h4 className="mb-7 text-body2_b">답변</h4>
                <p>네 고객님 안녕하세요.</p>
            </AccordionContent>
        </AccordionItem>
    );
}
