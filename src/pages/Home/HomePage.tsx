import { TopHeader } from '@/components/common';

export default function HomePage() {
    return (
        <TopHeader>
            <TopHeader.Title logo />
            <TopHeader.Util cart />
        </TopHeader>
    );
}
