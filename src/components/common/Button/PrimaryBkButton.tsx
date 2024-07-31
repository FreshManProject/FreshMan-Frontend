import React from 'react';

interface IPrimaryBkButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    disabled?: boolean;
    handleClick: () => void;
}

export default function PrimaryBkButton({
    children,
    primary,
    handleClick,
    disabled,
}: IPrimaryBkButtonProps) {
    return (
        <button
            onClick={handleClick}
            type="button"
            id="primaryBtn"
            disabled={disabled}
            className={`${primary ? 'text-primary' : 'text-white'} flex h-[3.75rem] items-center justify-center rounded-lg border bg-bk px-3 py-1 text-title3_b disabled:opacity-20`}
        >
            {children}
        </button>
    );
}
