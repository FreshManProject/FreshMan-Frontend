import { Accordion } from '@/components/ui/accordion';
import QnAItem from './QnAItem';

export default function QnAList() {
    return (
        <Accordion type="single" collapsible className="-mx-4">
            {Array(5)
                .fill(null)
                .map((item, index) => (
                    <QnAItem key={index} value={index} />
                ))}
        </Accordion>
    );
}
