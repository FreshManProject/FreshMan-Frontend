import { Accordion } from '@/components/ui/accordion';
import { InquiryType } from '@/types/User/inquiry';
import QnAItem from './QnAItem';

interface Iprops {
    data: InquiryType[];
}
export default function QnAList({ data }: Iprops) {
    return (
        <Accordion type="single" collapsible className="-mx-4">
            {data.map((item: InquiryType, index: number) => (
                <QnAItem key={index} value={index} />
            ))}
        </Accordion>
    );
}
