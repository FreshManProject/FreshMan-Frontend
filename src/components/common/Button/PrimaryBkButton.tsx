interface IPrimaryBkButtonProps {
    children: string;
    primary?: boolean;
    handleClick: () => void;
}

export default function PrimaryBkButton({
    children,
    primary,
    handleClick,
}: IPrimaryBkButtonProps) {
    return (
        <button
            onClick={handleClick}
            type={'button'}
            id={'primaryBtn'}
            className={`${primary ? 'text-primary' : 'text-white'} flex h-[3.75rem] items-center justify-center rounded-lg border bg-bk px-3 py-1 text-title3_b`}
        >
            {children}
        </button>
    );
}
