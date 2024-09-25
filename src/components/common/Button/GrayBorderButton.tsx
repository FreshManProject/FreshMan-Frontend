import { forwardRef } from 'react';

interface IGrayBorderButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const GrayBorderButton = forwardRef<HTMLButtonElement, IGrayBorderButtonProps>(
    ({ children, onClick }, ref) => {
        return (
            <button
                ref={ref} // 전달받은 ref를 button 요소에 적용
                type="button"
                onClick={onClick}
                className={
                    'flex h-[3.75rem] items-center justify-center rounded-lg border border-gray200 px-3 py-1 text-title3_b text-bk'
                }
            >
                {children}
            </button>
        );
    },
);
GrayBorderButton.displayName = 'GrayBorderButton';
export default GrayBorderButton;
