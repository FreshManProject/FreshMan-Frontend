import { CategoryMenuType } from '@/types/category';

interface PropsType {
    className?: string;
}

export default function CategoryMenu({ className }: PropsType) {
    const categries: CategoryMenuType[] = [
        {
            id: 1,
            name: '스킨케어',
            icon: 'skin',
        },
        {
            id: 2,
            name: '바디케어',
            icon: 'body',
        },
        {
            id: 3,
            name: '헤어케어',
            icon: 'hair',
        },
        {
            id: 4,
            name: '발케어',
            icon: 'foot',
        },
        {
            id: 5,
            name: '립',
            icon: 'lip',
        },
        {
            id: 6,
            name: '향수',
            icon: 'perfume',
        },
    ];

    return (
        <>
            {categries.map((menu: CategoryMenuType) => (
                <li key={menu.id} className={className}>
                    <figure>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/icons-${menu.icon}.svg`}
                            alt={menu.name}
                        />
                        <figcaption>{menu.name}</figcaption>
                    </figure>
                </li>
            ))}
        </>
    );
}
