import { Outlet } from 'react-router-dom';
import TopHeader from '../TopHeader';

interface ILayoutWithoutNavProps {
    title?: string;
}

export default function LayoutWithoutNav({ title }: ILayoutWithoutNavProps) {
    return (
        <>
            {/* TODO: title은 추후 resoponse에 따라 변경되야함. 동적으로 어떻게 구상할지 고민 필요 */}

            <TopHeader title={title} />
            <main>
                <Outlet />
            </main>
        </>
    );
}
