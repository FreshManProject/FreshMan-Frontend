import useDragScroll from '@/hooks/useDragScroll';
import React, { ReactElement } from 'react';

interface HorizontalScrollProps {
    elementSize: string;
    children: React.ReactNode;
}

export default function HorizontalScroll({
    children,
    elementSize,
}: HorizontalScrollProps) {
    const { onMouseDown, onMouseMove, onMouseUp, targetEl } =
        useDragScroll<HTMLUListElement>();
    console.log(elementSize);
    return (
        <div className="overflow-hidden">
            <ul
                ref={targetEl}
                draggable
                onDragStart={onMouseDown}
                onDragOver={onMouseMove}
                onDragEnd={onMouseUp}
                onDragLeave={onMouseUp}
                className="w-full overflow-x-auto whitespace-nowrap"
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        const element = child as ReactElement;

                        return React.cloneElement(element, {
                            className: `${elementSize} inline-block`,
                        });
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}
